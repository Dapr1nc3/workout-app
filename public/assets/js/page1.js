$(document).ready(function () {});

//   LOGIN
async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
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
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// contact us
let contactEmail = document.querySelector("#contact-email");
let contactName = document.querySelector("#name");
let contactPhone = document.querySelector("#phone");

// saving them to local stotage
contactEmail.value = localStorage.getItem("result");
contactName.value = localStorage.getItem("result-2");
contactPhone.value = localStorage.getItem("result-3");

// function that lets them stay after the refresh
contactEmail.addEventListener("keyup", (event) => {
  localStorage.setItem("result", textArea.value);
});
