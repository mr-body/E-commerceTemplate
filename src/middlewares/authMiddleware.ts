import { firebaseAuth } from '@/util/firebase/BaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export const authMiddleware = async () => {

  return new Promise((resolve) => {
    // Verifica primeiro no localStorage para resposta mais rápida
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (!isAuthenticated) {
      resolve(false);
      return;
    }

    // Se existe no localStorage, verifica com o Firebase
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      unsubscribe();
      resolve(!!user);
    });
  });
};