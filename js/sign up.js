let username = document.querySelector("#name1")
let age = document.querySelector("#age1")
let phone = document.querySelector("#phone1")
let email = document.querySelector("#email1")
let password = document.querySelector("#password1")
let registerBtn = document.querySelector("#sign_up")
registerBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value === "" || age.value ==="" || phone.value === "" || email.value === "" || password.value === ""){
        alert("please fill data")
    }else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("age",age.value)
        localStorage.setItem("phone",phone.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        setTimeout(() => {
            window.location = "login user.html"
        }, 1500)
    }
})

