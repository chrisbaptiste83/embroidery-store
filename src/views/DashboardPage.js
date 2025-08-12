import { Dashboard } from '../components/Dashboard.js';

export function DashboardPage() {
  return `
    <main class="max-w-6xl mx-auto p-6">
      <h1 class="text-4xl font-bold mb-8 text-indigo-800">Products</h1>
      ${Dashboard()}
    </main>
  `;
}

