let nameInput = document.querySelector("#name1");
let ageInput = document.querySelector("#age1");
let emailInput = document.querySelector("#email1");
let passwordInput = document.querySelector("#password1");
let signUpBtn = document.querySelector("#sign_up");

signUpBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (nameInput.value === "" || ageInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields");
    } else {
        console.log("Name:", nameInput.value);
        console.log("Age:", ageInput.value);
        console.log("Email/Phone:", emailInput.value);
        console.log("Password:", passwordInput.value);

        setTimeout(() => {
            window.location = "login user.html";
        }, 2000);
    }
});