// const loginform = document.getElementById("login-form");

// function submitLogin(e) {
//     e.preventDefault();
//     const username = document.getElementById("username").value.trim()
//     const password = document.getElementById("password").value.trim()

//    if(username&&password){
//        fetch('/api/users', {
//            method: "post",
//            body: JSON.stringify({
//                username,
//                password
//            }),
//            headers: {
//                 "Content-Type": "application/json"
//            }
//        }).then((response) => {
//            console.log(response);
//            document.location.replace("/page2")
//        }).catch((error) => {
//            alert(error) 
//            console.log(error)
//        })
//    };
// };

// loginform.addEventListener('submit', submitLogin);


//   LOGIN 
async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/page3');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);