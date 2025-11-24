// src/pages/signup.js
import { signUp } from '../services/auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const user = await signUp(email, password);
        console.log("Signed up user:", user);
        // Redirect to profile or success page
        window.location.href = '/index.html';
      } catch (error) {
        alert("Signup failed: " + error.message);
      }
    });
  } else {
    console.error("Signup form not found in the DOM.");
  }
});
