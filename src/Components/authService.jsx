// authService.js
import { auth } from './firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'

export const signInWithEmail = async (email, password) => {
    try {
        console.log(auth)
      await signInWithEmailAndPassword(auth,email, password);
    } catch (error) {
      throw error;
    }
  };

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
};
