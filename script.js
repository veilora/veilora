function openOrderForm(productName) {
  const form = document.getElementById('order-form');
  const input = document.getElementById('product');
  if (form && input) {
    form.style.display = 'block';
    input.value = productName;
  } else {
    console.error('Order form or input not found.');
  }
}

function closeOrderForm() {
  const form = document.getElementById('order-form');
  if (form) {
    form.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const product = document.getElementById('product').value;
      const message = Hello, I want to order the ${product}. My name is ${name}.;
      const whatsappNumber = '+212772353917';
      const url = https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)};
      window.open(url, '_blank');
      closeOrderForm();
    });
  }
});
