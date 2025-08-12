// src/components/Dashboard.js
import { ProductList } from './ProductList.js'; // your existing ProductList component

export function Dashboard() {
  return `
    <section id="dashboard" class="p-6 bg-base-200 rounded-lg shadow max-w-6xl mx-auto">
      <div id="product-list-container">
        <p class="text-gray-500">Loading products...</p>
      </div>
    </section>
  `;
}

export async function loadProducts() {
  const container = document.getElementById('product-list-container');

  try {
    const res = await fetch('http://192.168.1.100:3000/products');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const products = await res.json();

    container.innerHTML = ProductList(products);
  } catch (error) {
    container.innerHTML = `<p class="text-red-600">Failed to load products. Please try again later.</p>`;
    console.error('Error loading products:', error);
  }
}

