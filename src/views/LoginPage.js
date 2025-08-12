import { LoginForm } from '../components/LoginForm.js';

export function LoginPage() {
  return `
    <h1 class="text-3xl font-bold mb-6 text-center">Create Your Account</h1>
    ${LoginForm()}
  `;
}

