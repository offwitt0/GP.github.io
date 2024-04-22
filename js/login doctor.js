let emailPhoneInput = document.querySelector("#emailphone");
let passwordInput = document.querySelector("#password55");
let loginBtn = document.querySelector("#labla23");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (emailPhoneInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields");
    } else {
        console.log("Email/Phone:", emailPhoneInput.value);
        console.log("Password:", passwordInput.value);

        setTimeout(() => {
            window.location = "view doctor.html";
        }, 2000);
    }
});