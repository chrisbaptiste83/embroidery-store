// src/views/SuccessPage.js
import { Navbar } from '../components/Navbar.js';

export function SuccessMessage() {
  return `
    ${Navbar()}
    <main class="max-w-2xl mx-auto text-center py-20">
      <div class="bg-green-100 border border-green-300 rounded-lg p-8">
        <h1 class="text-3xl font-bold text-green-700 mb-4">
          🎉 Success!
        </h1>
        <p class="text-gray-700 mb-6">
          Your order has been placed successfully. You’ll receive an email confirmation shortly.
        </p>
        <a 
          href="#home" 
          class="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Return to Home
        </a>
      </div>
    </main>
  `;
}

