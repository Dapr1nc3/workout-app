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