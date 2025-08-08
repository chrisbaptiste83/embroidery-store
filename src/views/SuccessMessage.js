<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Success - Embroidery Shop</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex flex-col items-center p-6">
    <!-- Navigation -->
    <nav class="w-full max-w-6xl mx-auto mb-8 px-4">
        <div class="flex flex-wrap items-center justify-between py-4 border-b border-gray-300">
            <h1 class="text-3xl font-bold text-indigo-700">Embroidery Shop</h1>
            <div class="flex flex-wrap gap-6 items-center text-sm font-medium text-indigo-700">
                <a href="index.html" class="hover:underline hover:underline-offset-4 hover:text-indigo-900 transition">Home</a>
                <div id="category-links" class="flex gap-4 flex-wrap items-center text-sm font-medium text-indigo-700">
                    <!-- Categories will be inserted here dynamically -->
                </div>
                <a href="signup.html" class="hover:underline hover:underline-offset-4 hover:text-indigo-900 transition">Sign Up</a>
                <a href="login.html" class="hover:underline hover:underline-offset-4 hover:text-indigo-900 transition">Login</a>
                <button id="cart-btn" class="relative ml-4" aria-label="Toggle shopping cart">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-indigo-700 hover:text-indigo-900 transition">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2m.6 3h13.4l-1.6 8H7.2l-1.6-8zm0 0L5.2 5H19m-9 12a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
                    </svg>
                    <span id="cart-count" class="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 hidden">0</span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Success Message -->
    <div class="max-w-3xl w-full bg-green-100 p-8 rounded-lg shadow text-center">
        <h1 class="text-3xl font-bold text-green-800 mb-4">Purchase Successful!</h1>
        <p class="text-green-700 mb-6">Thank you for your order. Your cart has been cleared. You’ll receive a confirmation email shortly.</p>
        <a href="index.html" class="inline-block bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-800 transition">Back to Shop</a>
    </div>

    <!-- Clear Cart Script -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            try {
                localStorage.removeItem("myCart");
                console.log('Cart cleared from localStorage after successful checkout');
                // Update cart count in navigation if needed
                var cartCount = document.getElementById("cart-count");
                if (cartCount) {
                    cartCount.classList.add("hidden");
                    cartCount.textContent = "0";
                }
            } catch (error) {
                console.error('Error clearing cart from localStorage:', error);
            }
        });
    </script>
</body>
</html>

