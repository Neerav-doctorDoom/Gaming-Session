// script.js
document.getElementById("futuristicForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMessage = document.getElementById("statusMessage");

    // Validate inputs
    if (!name || !email || !message) {
        statusMessage.textContent = "All fields are required!";
        statusMessage.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        statusMessage.textContent = "Invalid email address!";
        statusMessage.style.color = "red";
        return;
    }

    // Success message
    statusMessage.textContent = "Form submitted successfully!";
    statusMessage.style.color = "#00ff8c";

    // Optionally, reset the form
    this.reset();
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
