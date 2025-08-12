// src/views/SignupPage.js
import { Navbar } from '../components/Navbar.js';
import { SignupForm } from '../components/SignupForm.js';

export function RegisterForm() {
  return `
    <main class="max-w-md mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6 text-center">Create Your Account</h1>
      ${SignupForm()}
    </main>
  `;
}

