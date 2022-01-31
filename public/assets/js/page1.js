const console = require("console")

function submitLogin() {
    const userName = document.getElementById("username").value.trim()
    const password = document.getElementById("password").value.trim()

   if(userName&&password){
       fetch("/login", {
           method: "post",
           body: JSON.stringify({
               userName,
               password
           }),
           headers: {
                "Content-Type": "application/json"
           }
       }).then((response) => {
           console.log(response);
       }).catch((error) => {
           alert(error) 
           console.log(error)
       })
   };
};


//   LOGIN 
async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);