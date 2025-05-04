function showOrderForm(productName) {
  document.getElementById("order-form").classList.remove("hidden");
  document.getElementById("selected-product").innerText = "Product: " + productName;
  document.getElementById("customer-name").value = "";
}

function hideOrderForm() {
  document.getElementById("order-form").classList.add("hidden");
}

function submitOrder() {
  const name = document.getElementById("customer-name").value;
  const product = document.getElementById("selected-product").innerText.replace("Product: ", "");
  if (name.trim() === "") {
    alert("Please enter your name");
    return;
  }
  alert(Order received!\nName: ${name}\nProduct: ${product});
  hideOrderForm();
}
