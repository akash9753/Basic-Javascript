const Registration = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Registartion End");
    reject("error in registartion");
    }, 1000);
  });
};
const emailSend = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Email Send End");
    }, 5000);
  });
};
const Login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Login End");
    }, 1000);
  });
};
const getUserData = (cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getUserData End");
    }, 1000);
  });
};
const displayUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("displayUserData End");
    }, 1000);
  });
};

const auth = async () =>{
    try{
        console.log("Loading....");
        const res1 =  await Registration()
        console.log(res1);
        const res2 = await emailSend();
        console.log(res2);
        const res3 = await Login()
        console.log(res3);
        const res4 = await getUserData()
        console.log(res4);
        const res5 = await displayUserData()
        console.log(res5);
        console.log("Loading end....");
    }catch(error){
        console.log(error);
        throw new Error("Error Occured")
    }
     
}
auth().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
console.log("All other work");