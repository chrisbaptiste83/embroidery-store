// src/pages/login.js
import { signIn } from '../services/auth.js';
import { authStateListener } from '../services/auth.js';
authStateListener((user) => {
  if (user) {
    // If already logged in, redirect to index.html
    window.location.href = 'index.html';
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const user = await signIn(email, password);
        console.log("Logged in user:", user);
        alert("Logged in successfully!");
        window.location.href = "index.html";
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    });
  } else {
    console.error("Login form not found in the DOM.");
  }
});
