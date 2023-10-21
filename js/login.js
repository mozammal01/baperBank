document.getElementById('btn-submit').addEventListener('click', function () {
  const email = document.getElementById('email');
  const password = document.getElementById('pass');

  if (email.value == 'baper@bank.com' && password.value == 'secret') {
    window.location.href = 'bank.html'
  }
  else {
    alert('Check your email and password')
  }
})