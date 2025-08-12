export function ProductList(products) {
  if (!products || products.length === 0) {
    return `<p class="text-gray-500 col-span-full">No products available.</p>`;
  }

  return `
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
      ${products.map(product => `
        <div class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition flex flex-col">
          <div class="card-body flex-grow flex flex-col justify-between">
            <h2 class="card-title text-indigo-700 font-bold text-xl">${product.name}</h2>
            <p class="text-gray-600 mt-2 flex-grow">${product.description || 'No description'}</p>
            <p class="font-semibold text-indigo-600 mt-4 text-lg">$${parseFloat(product.price).toFixed(2)}</p>
            <button data-product-id="${product.id}" class="btn btn-primary mt-4 self-start">View Details</button>
          </div>
        </div>
      `).join('')}
    </section>
  `;
}

