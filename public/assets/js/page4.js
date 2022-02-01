// SIGNUP
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (username && password) {
      const response = fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  

    // check the response status
    if (response.ok) {
      document.location.replace("/page3");
    } else {
      alert(response.statusText);
    }
  }}
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
