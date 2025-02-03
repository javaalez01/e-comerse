let cart = [];

// Update the cart count
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Add product to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-product');
    const productPrice = parseFloat(this.getAttribute('data-price'));

    const product = {
      name: productName,
      price: productPrice
    };

    cart.push(product);
    updateCartCount();
    alert(`${productName} has been added to your cart!`);
  });
});
