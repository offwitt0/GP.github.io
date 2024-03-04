
let email = document.querySelector("#email2")
let password = document.querySelector("#password2")
let loginBtn = document.querySelector("#login")

let getusername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")
loginrBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value === "" || password.value === ""){
        alert("please fill data")
    }else{
      if(getusername && getusername.trim() === username.value && getpassword && getpassword.trim() === password.value){

        setTimeout(() => {
            window.location = "Home.html"
        }, 1500)
    }else{
        alert("username or password is not true")
    }
    }
})