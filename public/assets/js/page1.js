const loginform = document.getElementById("login-form");

function submitLogin(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim()
    const password = document.getElementById("password").value.trim()

   if(username&&password){
       fetch("/api/users/login", {
           method: "post",
           body: JSON.stringify({
               username,
               password
           }),
           headers: {
                "Content-Type": "application/json"
           }
       }).then((response) => {
           console.log(response);
           document.location.replace("/page2")
       }).catch((error) => {
           alert(error) 
           console.log(error)
       })
   };
};

loginform.addEventListener('submit', submitLogin);