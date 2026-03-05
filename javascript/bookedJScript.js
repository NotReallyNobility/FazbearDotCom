submitButton = document.getElementById("submit");
emailInput = document.getElementById("emailInput");
const regex = /.+?@.+?(\.com|\.edu|\.org|\.net|\.gov)/

emailInput.addEventListener("input", function() {
    input = emailInput.value
    if (regex.test(input)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});