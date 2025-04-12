import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

export const useLogin = () => {
  const [error, setError] = useState<string>('');

  const login = async (email: string, password: string) => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (err) {
      setError('Invalid login credentials');
      return null;
    }
  };

  return { login, error };
};