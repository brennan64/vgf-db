const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#username-login").value;
  const password = document.querySelector("#password-login").value;

  // Send a POST request to the API endpoint
  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the homepage
    document.location.replace("/landing");
  } else {
    alert("Failed to Log");
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
