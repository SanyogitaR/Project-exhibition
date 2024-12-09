document.getElementById("signUpForm").addEventListener("submit", function (event) {
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;
    
    if (!name || !email || !password) {
        alert("Please fill out all fields.");
        event.preventDefault();
    }
});
