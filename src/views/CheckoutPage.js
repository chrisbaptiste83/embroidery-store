// src/views/CheckoutPage.js
import { Navbar } from '../components/Navbar.js';
import { Checkout } from '../components/Checkout.js';

export function CheckoutPage() {
  return `
    ${Navbar()}
    <main class="max-w-4xl mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6 text-center">Checkout</h1>
      ${Checkout()}
    </main>
  `;
}

