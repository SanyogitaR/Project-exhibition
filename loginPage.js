// JavaScript function to validate the login form
function validateForm() {
    const email = document.loginForm.email.value;
    const password = document.loginForm.password.value;
    
    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return false;
    }
    
    // Further validation can be added here if needed

    return true; // Submit the form
}
