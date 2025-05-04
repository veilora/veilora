function openOrderForm(productName) {
  // Set the product name in the form
  document.getElementById('product').value = productName;
  // Show the order form
  document.getElementById('orderForm').style.display = 'block';
}

function closeOrderForm() {
  // Close the order form
  document.getElementById('orderForm').style.display = 'none';
}