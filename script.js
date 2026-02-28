function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");
    const role = localStorage.getItem("role");

    if (savedUser === null) {
        alert("Please Sign Up first");
        return;
    }

    if (user === savedUser && pass === savedPass) {
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("home-page").classList.remove("hidden");

        if (role === "admin") {
            alert("Welcome Admin ");
           
        } else {
            alert("Welcome User ");
           
        }
    } else {
        alert("Invalid Login");
    }
}


function logout() {
    document.getElementById("home-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}


function showSignup() {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("signup-page").classList.remove("hidden");
}


function showLogin() {
    document.getElementById("signup-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}


function signup() {
    const user = document.getElementById("new-username").value;
    const pass = document.getElementById("new-password").value;
    const role = document.getElementById("role").value;

    if (user === "" || pass === "" || role === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    localStorage.setItem("role", role);

    alert("Signup Successful as " + role);
    showLogin();
}

function showPage(id) {
    const pages = ["availability-page", "issue-page", "return-page", "fine-page"];
    pages.forEach(page => {
        document.getElementById(page).classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}


function validateAndSearch() {
    alert("Book is Available ");
}


function processReturn() {
    document.getElementById("fine-book-name").value =
        document.getElementById("return-book-name").value;

    document.getElementById("fine-amount").value = 50;
    showPage("fine-page");
}


function completeFinePayment() {
    if (document.getElementById("fine-paid-check").checked) {
        alert("Fine Paid Successfully");
        showPage("issue-page");
    } else {
        alert("Please check Fine Paid");
    }
}