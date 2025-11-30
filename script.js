const loginPage = document.getElementById('loginPage');
const portfolioPage = document.getElementById('portfolioPage');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

let isLoggedIn = false;

function handleLogin() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  if (username === 'kenneth' && password === 'santiago') {
    isLoggedIn = true;
    loginPage.classList.add('hidden');
    portfolioPage.style.display = 'block';
  } else {
    alert('❌ Incorrect username or password!\n\nTry: admin / 1234');
  }
}

function handleLogout() {
  isLoggedIn = false;
  usernameInput.value = '';
  passwordInput.value = '';
  portfolioPage.style.display = 'none';
  loginPage.classList.remove('hidden');
}

document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && !isLoggedIn) {
    handleLogin();
  }
});