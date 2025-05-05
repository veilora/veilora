// Function to open the order form modal and populate the product name
function openOrderForm(productName) {
  // Display the modal when the button is clicked
  document.getElementById('order-form').style.display = 'block';
  // Set the value of the product input to the selected product name
  document.getElementById('product').value = productName;
}

// Function to close the order form modal
function closeOrderForm() {
  document.getElementById('order-form').style.display = 'none';
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  
  // Get the form element and listen for submit events
  const form = document.getElementById('orderForm');
  
  // If the form is available
  if (form) {
    // Add event listener to handle the form submission
    form.addEventListener('submit', function (e) {
      // Prevent the default form submission behavior
      e.preventDefault();
      
      // Get the name and product values from the form inputs
      const name = document.getElementById('name').value.trim();
      const product = document.getElementById('product').value;
      
      // Check if the name is not empty
      if (!name) {
        alert("Please enter your name.");
        return;
      }
      
      // Prepare the message to send via WhatsApp
      const message = Hello, I want to order the ${product}. My name is ${name}.;
      
      // Your WhatsApp number (replace with your actual WhatsApp number)
      const whatsappNumber = '+212772353917';  // Replace with your WhatsApp number
      
      // Construct the WhatsApp URL
      const url = https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)};
      
      // Open the WhatsApp link in a new tab
      window.open(url, '_blank');
      
      // Close the order form modal
      closeOrderForm();
    });
  }
});
