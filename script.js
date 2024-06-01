// CUSTOM VALIDATION FOR EMAIL FIELD

const form = document.getElementById('form');
const emailInput = document.getElementById('email');

// Check validity of email input
function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// Define display of error message
function setError() {
    const invalidMsg = document.getElementById('invalidMsg');
    const errorIcon = document.getElementById('errorIcon');
    invalidMsg.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
    emailInput.setAttribute('class', "invalid");
}

// Full email validation fonction
function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (!isValidEmail(emailValue)) {
        setError();
        return false
    }
    else {
        localStorage.setItem("email", emailValue);
    }
}

//Removes error email display when input is changed
emailInput.addEventListener('input', function() {
        invalidMsg.style.visibility = "hidden";
        errorIcon.style.visibility = "hidden";
        emailInput.removeAttribute('class');
    })
    

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateEmail();
});