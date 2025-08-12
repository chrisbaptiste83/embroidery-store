export function Navbar() {
  return `
    <nav class="navbar bg-base-200 shadow-md px-6 py-4 rounded-b-lg w-full max-w-6xl mx-auto flex justify-between items-center">
      <div class="flex-1">
        <a href="#home" data-page="home" class="btn btn-ghost normal-case text-xl font-bold text-indigo-700 hover:text-indigo-900">
          Embroidery Shop
        </a>
      </div>
      <div class="flex-none gap-4 flex items-center">
        <a href="#home" data-page="home" class="btn btn-ghost btn-sm rounded-btn text-indigo-700 hover:text-indigo-900">Home</a>
        <a href="#products" data-page="products" class="btn btn-ghost btn-sm rounded-btn text-indigo-700 hover:text-indigo-900">Products</a>
        <a href="#signup" data-page="signup" class="btn btn-primary btn-sm rounded-btn text-white hover:bg-indigo-800">Sign Up</a>
        <a href="#login" data-page="login" class="btn btn-outline btn-sm rounded-btn text-indigo-700 hover:text-indigo-900">Login</a>
        <button id="cart-btn" aria-label="Toggle cart" class="btn btn-circle btn-sm btn-ghost text-indigo-700 hover:text-indigo-900 relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2m.6 3h13.4l-1.6 8H7.2l-1.6-8zm0 0L5.2 5H19m-9 12a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
          </svg>
          <span id="cart-count" class="badge badge-xs badge-primary indicator-item hidden">0</span>
        </button>
      </div>
    </nav>
  `;
}

