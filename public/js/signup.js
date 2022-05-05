const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const name = document.querySelector('#username-signup');
    const email = document.querySelector('#email-signup');
    const password = document.querySelector('#password-signup');
  
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username: name.value,
          email: email.value,
          password: password.value,
         }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        //document.location.replace('/');
        alert('signed up');
      } else {
        alert('Failed to signup');
      }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
