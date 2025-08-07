import { firebaseSignIn, firebaseSignOut, firebaseSignUp } from '@/action/firebase/firebase';
import { AuthContext } from '@/hooks/auth-context';
import type { IAuth, LoginFormValues, UserFormValues } from '@/types/interfaces';
import { firebaseAuth } from '@/util/firebase/BaseConfig';
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { useEffect, useState, type ReactNode } from 'react';
import { toast } from 'sonner';

interface AuthProviderProps {
    children: ReactNode;
}
const handleAuthError = (err: any) => {
    const errorCode = err.code;

    const errorMessages: Record<string, string> = {
        'auth/email-already-in-use': 'E-mail já está em uso.',
        'auth/invalid-email': 'E-mail inválido.',
        'auth/operation-not-allowed': 'Operação não permitida.',
        'auth/weak-password': 'Senha muito fraca.',
        'auth/user-disabled': 'Usuário desativado.',
        'auth/user-not-found': 'Usuário não encontrado.',
        'auth/wrong-password': 'Senha incorreta.',
        'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
        'auth/network-request-failed': 'Erro de conexão com a internet.',
        
        // Erros de login com provedores externos (ex: GitHub)
        'auth/account-exists-with-different-credential': 'Já existe uma conta com o mesmo e-mail, mas com outro método de login.',
        'auth/credential-already-in-use': 'Esta credencial já está associada a outra conta de usuário.',
        'auth/popup-closed-by-user': 'A janela de login foi fechada antes da conclusão.',
        'auth/cancelled-popup-request': 'Já existe uma janela de login aberta.',
        'auth/popup-blocked': 'O navegador bloqueou a janela de login.',
        'auth/unauthorized-domain': 'Este domínio não está autorizado para autenticação.',
        'auth/invalid-credential': 'Credencial inválida ou expirada.',
    };

    const message = errorMessages[errorCode] || 'Erro desconhecido. Tente novamente.';
    toast.error(message);
};


const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);

    const signUp = async (creds: UserFormValues) => {
        setIsLoading(true);
        try {
            const signUpResult = await firebaseSignUp(creds);
            const { user } = signUpResult;
            if (user) {
                window.location.href = `/login`
            } else {
                toast.error('Erro ao criar conta');
            }
        } catch (err: any) {
            handleAuthError(err);
        } finally {
            setIsLoading(false);
        }
    };

    const signIn = async (creds: LoginFormValues) => {
        setIsLoading(true);
        try {
            const signInResult = await firebaseSignIn(creds);
            const { user } = signInResult;
            if (user) {
                setCurrentUser(user);
                localStorage.setItem('isAuthenticated', 'true');
                window.location.href = `/dashboard`
            } else {
                toast.error('Erro ao fazer login');
            }
        } catch (err: any) {
            handleAuthError(err);
        } finally {
            setIsLoading(false);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(firebaseAuth, provider);
            const user = result.user;

            if (user) {
                setCurrentUser(user);
                localStorage.setItem('isAuthenticated', 'true');
                window.location.href = `/dashboard`;
            } else {
                toast.error('Erro ao fazer login com Google');
            }
        } catch (err: any) {
            handleAuthError(err);
        }
    };

    const signInWithGithub = async () => {
        try {
            const provider = new GithubAuthProvider();
            const result = await signInWithPopup(firebaseAuth, provider);
            const user = result.user;

            if (user) {
                setCurrentUser(user);
                localStorage.setItem('isAuthenticated', 'true');
                window.location.href = `/dashboard`;
            } else {
                toast.error('Erro ao fazer login com Google');
            }
        } catch (err: any) {
            handleAuthError(err);
        }
    };

    const resetPassword = async (email: string) => {
        setIsLoading(true);
        try {
            await sendPasswordResetEmail(firebaseAuth, email);
            toast.success('Link para redefinir senha enviado para o e-mail.');
            setTimeout(() => {
                window.location.href = '/login';
            }, 1000);
        } catch (err: any) {
            handleAuthError(err);
        } finally {
            setIsLoading(false);
        }
    };

    const signOut = async () => {
        setIsLoading(true);
        try {
            await firebaseSignOut();
            setCurrentUser(null);
            localStorage.removeItem('isAuthenticated');
            window.location.href = `/`
        } catch (err) {
            toast.error('Erro ao sair da conta');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
            setCurrentUser(user);
            setIsAuthLoading(false);

            if (user) {
                localStorage.setItem('isAuthenticated', 'true');
                console.log(user)
            } else {
                localStorage.removeItem('isAuthenticated');

                const publicRoutes = ['/', '/precing', '/login', '/signup'];
                if (!publicRoutes.includes(window.location.pathname)) {
                    window.location.href = '/';
                }
            }
        });

        return unsubscribe;
    }, []);

    const authValues: IAuth = {
        user: currentUser,
        loading: isLoading,
        isAuthLoading,
        setCurrentUser,
        signIn,
        resetPassword,
        signInWithGoogle,
        signInWithGithub,
        signUp,
        signOut,
    };

    if (isAuthLoading) return;

    return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
};

export default AuthProvider;