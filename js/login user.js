
let emailInput = document.querySelector("#email2");
let passwordInput = document.querySelector("#password2");
let loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields");
    } else {
        console.log("Email/Phone:", emailInput.value);
        console.log("Password:", passwordInput.value);

        setTimeout(() => {
            window.location = "Home.html";
        }, 2000);
    }
});