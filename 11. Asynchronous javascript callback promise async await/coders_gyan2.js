const Registration = (cb) => {
  setTimeout(() => {
    console.log("Registration");
    cb();
  }, 1000);
};
const emailSend = (cb) => {
  setTimeout(() => {
    console.log("Email Send");
    cb();
  }, 10000);
};
const Login = (cb) => {
  setTimeout(() => {
    console.log("Login");
    cb();
  }, 1000);
};
const getUserData = (cb) => {
  setTimeout(() => {
    console.log("get user data");
    cb();
  }, 1000);
};
const displayUserData = () => {
  setTimeout(() => {
    console.log("Display user data");
  }, 1000);
};

Registration(() => {
  emailSend(() => {
    Login(() => {
      getUserData(() => {
        displayUserData();
      });
    });
  });
});
console.log("All other work");
