const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const usernameEl = document.querySelector("#username-login");
  const passwordEl = document.querySelector("#password-login");

  // Send a POST request to the API endpoint
  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.redirect('/categories');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler());
