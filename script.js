// Cart functionality
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productId = e.target.closest('.product').getAttribute('data-id');
    addToCart(productId);
  });
});

function addToCart(productId) {
  cart.push(productId);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}
