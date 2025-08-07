import type { IAuth } from '@/types/interfaces';
import { firebaseAuth } from '@/util/firebase/BaseConfig';
import { createContext, useContext } from 'react';

export const AuthContext = createContext<IAuth>({
    user: firebaseAuth.currentUser,
    loading: false,
    isAuthLoading: true,
    setCurrentUser: () => { },
    signInWithGoogle: () => { },
    signInWithGithub: () => {},
    resetPassword: () => { },
    signIn: async () => { },
    signUp: async () => { },
    signOut: async () => { },
});

export const useAuth = () => useContext(AuthContext);