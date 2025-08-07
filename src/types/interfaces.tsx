import type { User } from "firebase/auth";

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    displayName?: string;
}

export interface IAuth {
    user: any | null;
    loading: boolean;
    isAuthLoading: boolean;
    setCurrentUser: (user: User | null) => void;
    signIn: (creds: LoginFormValues) => void;
    resetPassword: (email: string) => void;
    signInWithGoogle: () => void;
    signInWithGithub: () => void;
    signUp: (creds: UserFormValues) => void;
    signOut: () => void;
}

export type FirebaseUser = {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName?: string | null; 
  photoURL?: string | null;  
  providerData: {
    providerId: string;
    email: string;
    displayName?: string | null;
    photoURL?: string | null;
  }[];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
};

export interface FirebaseDataReturn extends FirebaseUser {
  accessToken: string
}