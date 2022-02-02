// $(document).ready(function () {});
// SIGNUP
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    let response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // check the response status
    if (response.ok) {
      // console.log(response);
      let data = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (data.ok) {
        // console.log(data);
        window.localStorage.setItem("current_user", username);
      const signedInUser = window.localStorage.getItem(username);
      if (!signedInUser) {
        const userData = {
          textArea: "",
          textArea2: "",
          textArea3: "",
          textArea4: "",
          textArea5: "",
          textArea6: "",
          textArea7: "",
          textArea8: "",
          textArea9: "",
          textArea10: "",
          textArea11: "",
          textArea12: "",
          textArea13: "",
          textArea14: "",
        };
        window.localStorage.setItem(username, JSON.stringify(userData));
      }
        document.location.replace("/page3");
      } else {
        alert(data.statusText);
      }
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler)

