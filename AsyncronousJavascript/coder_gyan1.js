const waitForThreeSecond = () =>{
    let ms = 3000 + new Date().getTime()
    while(new Date() < ms){}
}

const Registration = (cb) =>{
        waitForThreeSecond()
        console.log("Registration");
        
}
const emailSend = () =>{
        console.log("Email Send");
}
const Login = () =>{
        console.log("Login");
}
const getUserData = () =>{
        console.log("get user data");
}
const displayUserData = () =>{
        console.log("Display user data");
}

Registration()
emailSend()
Login()
getUserData()
displayUserData()