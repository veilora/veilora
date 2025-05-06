function openOrderForm(productName) {
  document.getElementById('order-form').style.display = 'block';
  document.getElementById('product').value = productName;
}

function closeOrderForm() {
  document.getElementById('order-form').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const message = `Hello, I want to order the ${product}. My name is ${name}.`;
    const whatsappNumber = '+212772353917';
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    closeOrderForm();
  });
});
