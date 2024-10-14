// Form Validation
const inputName = document.getElementById("full-name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputMessage = document.getElementById("message");

inputName.addEventListener("change", validateName);
inputEmail.addEventListener("change", validateEmail);
inputPhone.addEventListener("change", validatePhone);
inputMessage.addEventListener("change", validateMessage);

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = false;

        // // Clear previous error messages
        // document.getElementById("nameError").classList.remove("hidden");
        // document.getElementById("emailError").classList.remove("hidden");
        // document.getElementById("phoneError").classList.remove("hidden");
        // document.getElementById("messageError").classList.remove("hidden");

        const isValidName = validateName();
        const isValidEmail = validateEmail();
        const isValidPhone = validatePhone();
        const isValidMessage = validateMessage();

        if (isValidName && isValidEmail && isValidPhone && isValidMessage) {
            isValid = true;
        }

        // If all fields are valid, allow form submission
        if (isValid) {
            alert("Form submitted successfully!");
            // Here, you can handle form submission (AJAX request, etc.)
            // For now, we reset the form.
            document.getElementById("contactForm").reset();
        }
    });
function validateName() {
    const name = document.getElementById("full-name").value.trim();
    // console.log("Valid name: " + name);

    if (name !== "") {
        document.getElementById("nameError").classList.add("hidden");
        return true;
    }
    document.getElementById("nameError").classList.remove("hidden");

    return false;
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    // console.log("email", email);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== "" && emailPattern.test(email)) {
        document.getElementById("emailError").classList.add("hidden");
        return true;
    }
    document.getElementById("emailError").classList.remove("hidden");
    return false;
}

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();

    const phonePattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (phone !== "" && phonePattern.test(phone)) {
        document.getElementById("phoneError").classList.add("hidden");
        return true;
    }
    document.getElementById("phoneError").classList.remove("hidden");
    return false;
}

function validateMessage() {
    const message = document.getElementById("message").value.trim();
    if (message.length >= 50) {
        document.getElementById("messageError").classList.add("hidden");
        return true;
    }
    document.getElementById("messageError").classList.remove("hidden");

    return false;
}
