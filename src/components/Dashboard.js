import { ProductList } from './ProductList.js';

export function Dashboard() {
  return `
    <section id="dashboard" class="p-6 bg-base-200 rounded-lg shadow max-w-6xl mx-auto">
      <div id="product-list-container">
        <p class="text-gray-500">Loading products...</p>
      </div>
    </section>
  `;
}


const products = [
  {
    id: 1,
    name: "Floral Mandala",
    price: 4.99,
    image: "floral-mandala.jpg",
    description: "A symmetrical floral mandala pattern for 5x5 hoops.",
    category: "Floral"
  },
  {
    id: 2,
    name: "Cute Fox",
    price: 3.99,
    image: "cute-fox.jpg",
    description: "A playful fox face perfect for children's clothing.",
    category: "Animals"
  },
  {
    id: 3,
    name: "Sunflower Patch",
    price: 4.25,
    image: "sunflower-patch.jpg",
    description: "Bright sunflower cluster ideal for tote bags.",
    category: "Floral"
  },
  {
    id: 4,
    name: "Lunar Moth",
    price: 5.49,
    image: "lunar-moth.jpg",
    description: "An elegant moth with crescent moons and stars.",
    category: "Celestial"
  },
  {
    id: 5,
    name: "Rose Heart",
    price: 3.75,
    image: "rose-heart.jpg",
    description: "A romantic heart of blooming roses.",
    category: "Romantic"
  },
  {
    id: 6,
    name: "Boho Arrows",
    price: 4.10,
    image: "boho-arrows.jpg",
    description: "Geometric boho-style arrows for modern embroidery.",
    category: "Boho"
  }
];

export function loadProducts() {
  const container = document.getElementById('product-list-container');
  try {
    container.innerHTML = ProductList(products);
  } catch (error) {
    container.innerHTML = `<p class="text-red-600">Failed to load products. Please try again later.</p>`;
    console.error('Error loading products:', error);
  }
}
