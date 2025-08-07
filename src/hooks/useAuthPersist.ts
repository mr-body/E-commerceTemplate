import { useEffect } from 'react';
import { useAuth } from './auth-context';
import { firebaseAuth } from '@/util/firebase/BaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export const useAuthPersist = () => {
  const { user, setCurrentUser } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('isAuthenticated');
    if (token && !user) {
      const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
        setCurrentUser(user);
        unsubscribe();
      });
    }
  }, [user, setCurrentUser]);
};