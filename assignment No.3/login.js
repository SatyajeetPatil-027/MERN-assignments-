function validateLogin() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === "" && password === "") {
        emailError.innerHTML = "Please enter a valid email address.";
        passwordError.innerHTML = "Password is required!";
        return false;
    }

    if (email === ""){
        emailError.innerHTML = "Email is required!";
        return false;
    } 
    
    else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid email format!";
        return false;
    }

    if (password === "") {
        passwordError.innerHTML = "Password is required!";
        return false;
    }

    if (password.length < 6){
        passwordError.innerHTML = "Password must be at least 6 characters.";
        return false;
    }

    alert("Login Successful");
    return true;
}
