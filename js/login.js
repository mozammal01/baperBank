document.getElementById('btn-submit').addEventListener('click', function () {
  const email = document.getElementById('email');
  const password = document.getElementById('pass');

  if (email.value == 'son@baap.com' && password.value == 'i am your son') {
    window.location.href = 'bank.html'
  }
  else {
    alert('Check your email and password')
  }
})