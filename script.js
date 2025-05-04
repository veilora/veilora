
function openForm() {
  document.getElementById("popup-form").style.display = "flex";
}

function closeForm() {
  document.getElementById("popup-form").style.display = "none";
}

function submitOrder() {
  var name = document.getElementById("customerName").value;
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  alert("Thank you, " + name + "! Your order has been submitted.");
  closeForm();
}
