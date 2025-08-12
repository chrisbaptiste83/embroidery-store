export function ProductModal() {
  return `
    <dialog id="product-modal" class="modal">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg" id="modal-title">Product Name</h3>
        <img id="modal-image" class="w-full object-contain rounded-lg my-4" alt="Product" />
        <p id="modal-description">Product description goes here.</p>
        <p id="modal-price" class="text-xl font-bold my-2"></p>
        <div class="modal-action">
          <button class="btn btn-primary">Add to Cart</button>
          <button class="btn">Cancel</button>
        </div>
      </form>
    </dialog>
  `;
}

