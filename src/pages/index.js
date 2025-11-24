// src/pages/index.js
console.log("index.js loaded successfully!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded, initializing app...");

    const CSV_PATH = '/data/data.csv'; // Adjust if CSV is elsewhere
    let products = [];
    let currentProduct = null;
    let cart = [];

    // Fetch and Parse CSV Data
    async function fetchCSV(path) {
        try {
            console.log("Fetching CSV from:", path);
            const res = await fetch(path);
            if (!res.ok) throw new Error(`Failed to fetch CSV: ${res.status}`);
            const text = await res.text();
            console.log("CSV fetched successfully, length:", text.length);
            return parseCSV(text);
        } catch (error) {
            console.error('Error fetching CSV:', error);
            alert('Failed to load products. Please try again later.');
            return [];
        }
    }
function setupEventListeners() {
    document.getElementById('cart-btn').addEventListener('click', e => {
        e.stopPropagation();
        toggleCartPanel();
    });
    document.body.addEventListener('click', () => {
        closeCartPanel();
    });
    document.getElementById('cart-panel').addEventListener('click', e => {
        e.stopPropagation();
    });
    document.querySelector('#product-modal form').addEventListener('submit', e => {
        e.preventDefault();
        const qty = document.getElementById('quantity').value;
        addToCart(qty);
        closeModal();
    });
    document.getElementById('go-to-checkout').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
}
    function parseCSV(data) {
        const [headerLine, ...lines] = data.trim().split('\n');
        const headers = headerLine.split(',');
        return lines.map(line => {
            const values = line.split(',');
            return headers.reduce((obj, header, i) => {
                obj[header.trim()] = values[i] ? values[i].trim() : '';
                return obj;
            }, {});
        });
    }

    // Render Product List
    function renderProductList(productList) {
        const container = document.getElementById('product-list');
        const loadingMsg = document.getElementById('loading-products');
        if (loadingMsg) loadingMsg.style.display = 'none';
        if (container) {
            console.log("Rendering products:", productList.length);
            container.innerHTML = '';
            if (productList.length === 0) {
                container.innerHTML = '<p class="text-gray-500 text-center col-span-full">No products found.</p>';
                return;
            }
            productList.forEach(product => container.appendChild(createProductCard(product)));
        } else {
            console.error("Product list container not found in DOM");
        }
    }

    function createProductCard(product) {
        const div = document.createElement('div');
        div.className = 'card bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow';
        div.innerHTML = `
            <figure class="p-4">
                <img 
                    src="${product.image || 'placeholder.jpg'}" 
                    alt="${product.name || 'Product Image'}" 
                    class="mx-auto object-contain h-48 w-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                />
            </figure>
            <div class="px-4 pb-4 text-center">
                <h2 class="font-semibold text-lg">${product.name || 'Unnamed Product'}</h2>
                <p class="text-gray-500 text-sm mt-1">${product.description || 'No description available.'}</p>
                <p class="text-indigo-600 font-bold text-base mt-2">$${parseFloat(product.price || 0).toFixed(2)}</p>
                <button
                    class="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow transition-all duration-150"
                    type="button"
                    aria-label="View details for ${product.name || 'product'}"
                >
                    View Details
                </button>
            </div>
        `;
        div.querySelector('button').addEventListener('click', () => {
            console.log("View Details clicked for:", product.name);
            showProductDetail(product);
        });
        return div;
    }

    function showProductDetail(product) {
        console.log("Showing details for:", product.name);
        currentProduct = product;
        const modalTitle = document.getElementById('modal-title');
        const modalPrice = document.getElementById('modal-price');
        const modalDescription = document.getElementById('modal-description');
        const modalImage = document.getElementById('modal-image');
        const quantity = document.getElementById('quantity');
        if (modalTitle) modalTitle.textContent = product.name || 'Unnamed Product';
        if (modalPrice) modalPrice.textContent = `$${parseFloat(product.price || 0).toFixed(2)}`;
        if (modalDescription) modalDescription.textContent = product.description || 'No description available.';
        if (modalImage) modalImage.src = product.image || 'placeholder.jpg';
        if (quantity) quantity.value = 1;
        openModal();
    }

    // Modal Control Functions
    function openModal() {
        const backdrop = document.getElementById('modal-backdrop');
        const dialog = document.getElementById('product-modal');
        if (backdrop && dialog) {
            console.log("Opening modal");
            backdrop.classList.remove('hidden');
            dialog.showModal();
        } else {
            console.error("Modal elements not found: backdrop or dialog is null", { backdrop, dialog });
        }
    }

    function closeModal() {
        const backdrop = document.getElementById('modal-backdrop');
        const dialog = document.getElementById('product-modal');
        if (backdrop && dialog) {
            console.log("Closing modal");
            dialog.close();
            backdrop.classList.add('hidden');
        } else {
            console.error("Modal elements not found: backdrop or dialog is null", { backdrop, dialog });
        }
    }

    // Modal Event Listeners
    const cancelBtn = document.getElementById('modal-cancel');
    const backdropElement = document.getElementById('modal-backdrop');
    const dialogElement = document.getElementById('product-modal');
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    if (dialogElement) dialogElement.addEventListener('cancel', closeModal);
    if (backdropElement) backdropElement.addEventListener('click', closeModal);

    // Add to Cart (minimal for now)
    function addToCart(quantity) {
        if (!currentProduct) return;
        const qty = parseInt(quantity);
        if (isNaN(qty) || qty < 1) {
            alert('Please enter a valid quantity.');
            return;
        }
        cart.push({ ...currentProduct, quantity: qty });
        updateCartCount();
        alert(`${qty} x "${currentProduct.name || 'item'}" added to cart!`);
        currentProduct = null;
        closeModal();
    }
  function toggleCartPanel() {
    const panel = document.getElementById('cart-panel');
    panel.classList.toggle('translate-x-full');
    panel.classList.toggle('translate-x-0');
}

function closeCartPanel() {
    const panel = document.getElementById('cart-panel');
    if (!panel.classList.contains('translate-x-full')) {
        panel.classList.add('translate-x-full');
        panel.classList.remove('translate-x-0');
    }
}

    function updateCartCount() {
        const countElem = document.getElementById('cart-count');
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        if (countElem) {
            if (totalItems > 0) {
                countElem.textContent = totalItems;
                countElem.classList.remove('hidden');
            } else {
                countElem.classList.add('hidden');
            }
        }
    }

    // Setup Modal Form Submission
    const modalForm = document.querySelector('#product-modal form');
    if (modalForm) {
        modalForm.addEventListener('submit', e => {
            e.preventDefault();
            const qty = document.getElementById('quantity')?.value;
            console.log("Adding to cart with quantity:", qty);
            addToCart(qty);
        });
    } else {
        console.error("Modal form not found in DOM");
    }

    // Populate Carousel with Featured Products
    function populateCarousel(featuredProducts) {
        console.log("Populating carousel with products:", featuredProducts.length);
        const carouselImages = [
            document.getElementById('carousel-img-1'),
            document.getElementById('carousel-img-2'),
            document.getElementById('carousel-img-3')
        ];

        featuredProducts.slice(0, 3).forEach((product, index) => {
            if (carouselImages[index]) {
                carouselImages[index].src = product.image;
                carouselImages[index].alt = product.name || 'Featured Product ' + (index + 1);
                console.log("Updated carousel image", index + 1, "with", product.name);
            }
        });
    }

    // Load Products
    async function loadProducts() {
        products = await fetchCSV(CSV_PATH);
        renderProductList(products);
        populateCarousel(products); // Use first few products for carousel
        updateCartCount(); // Initial cart count update
    }

    loadProducts();
});
