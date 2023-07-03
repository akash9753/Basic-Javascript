const Registration = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error in registration");
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

Registration()
  .then((data) => {
    console.log(data);
    emailSend().then((data) => {
      console.log(data);
      Login().then((data) => {
        console.log(data);
        getUserData().then((data) => {
          console.log(data);
          displayUserData().then((data) => {
            console.log(data);
          });
        });
      });
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("run");
  });
console.log("All other work");
