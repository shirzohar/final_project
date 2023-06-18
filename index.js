function addToCart(item) {
  var cartItems = document.getElementById('cart-items');
  var li = document.createElement('li');
  li.textContent = item;
  cartItems.appendChild(li);
}

function addToCart(itemName) {
  var cartItems = document.getElementById('cart-items');
  var li = document.createElement('li');
  li.textContent = itemName;
  cartItems.appendChild(li);
}