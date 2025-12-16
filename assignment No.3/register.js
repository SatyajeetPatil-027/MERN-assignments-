function validateRegister() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let phoneError = document.getElementById("phoneError");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    phoneError.innerHTML = "";

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;

    if (name === "" && email === "" && password === "" && phone === "") {
        nameError.innerHTML = "Please enter your name";
        emailError.innerHTML = "Please enter a valid email address";
        passwordError.innerHTML = "Password is required";
        phoneError.innerHTML = "Phone number is required";
        return false;
    }

    if (name === "") {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (email === "") {
        emailError.innerHTML = "Email is required";
        return false;
    }
    else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid email format";
        return false;
    }

    if (password === "") {
        passwordError.innerHTML = "Password is required";
        return false;
    }
    if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters";
        return false;
    }

    if (phone === "") {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    else if (!phonePattern.test(phone)) {
        phoneError.innerHTML = "Phone number must be 10 digits";
        return false;
    }
    alert("Registration Successful");
    return true;
}
