// src/services/auth.js
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from '../firebase.js';

// Sign up a new user
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error;
  }
};

// Sign in an existing user
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

// Sign out the current user
export const logOut = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Error signing out:", error.message);
    throw error;
  }
};

// Listen for auth state changes (to check if user is logged in)
export const authStateListener = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      callback(user);
    } else {
      // User is signed out
      callback(null);
    }
  });
};
