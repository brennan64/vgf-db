const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const name = document.querySelector('#username-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
  
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
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
.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler);