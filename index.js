function addToCart(item) {
  var cartItems = document.getElementById('cart-items');
  var li = document.createElement('li');
  li.textContent = item;
  cartItems.appendChild(li);
}

function addToCart(itemName) {
  // הוספת הפריט לסל
  var cartItem = document.createElement("div");
  cartItem.textContent = itemName;
  document.getElementById("cart-items").appendChild(cartItem);
}
