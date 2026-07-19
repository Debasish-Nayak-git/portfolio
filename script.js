// ===========================
// CONTACT FORM VALIDATION
// ===========================

function sendMessage() {

  // Step 1: Get values from input fields
  var name    = document.getElementById("name").value;
  var email   = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Step 2: Get the message box element
  var msg = document.getElementById("form-msg");

  // Step 3: Reset previous message
  msg.className = "";
  msg.style.display = "none";

  // Step 4: Check if any field is empty
  if (name === "" || email === "" || message === "") {
    msg.textContent = "Please fill in all fields.";
    msg.className = "error";
    return;
  }

  // Step 5: Basic email check (must have @ symbol)
  if (email.indexOf("@") === -1) {
    msg.textContent = "Please enter a valid email address.";
    msg.className = "error";
    return;
  }

  // Step 6: All good — show success message
  msg.textContent = "Message sent! I will get back to you soon.";
  msg.className = "success";

  // Step 7: Clear the form
  document.getElementById("name").value    = "";
  document.getElementById("email").value   = "";
  document.getElementById("message").value = "";

}