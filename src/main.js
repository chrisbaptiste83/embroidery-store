import { Navbar } from './components/Navbar.js';
import { LandingPage } from './views/LandingPage.js';
import { LoginPage } from './views/LoginPage.js';
import { RegisterForm } from './views/RegisterForm.js'; // renamed to RegisterPage for clarity
import { SuccessMessage } from './views/SuccessMessage.js';
import { DashboardPage } from './views/DashboardPage.js'; // import DashboardPage
import { CheckoutPage } from './views/CheckoutPage.js';   // import CheckoutPage
import { loadProducts } from './components/Dashboard.js';

const app = document.getElementById('app');
const navbar = document.getElementById('navbar');

navbar.innerHTML = Navbar();

function navigateTo(page) {
  switch (page) {
    case 'home':
      app.innerHTML = LandingPage();
      break;
    case 'products':
      app.innerHTML = DashboardPage();
      loadProducts(); // make sure to call this after the container is in the DOM
      break;
    case 'login':
      app.innerHTML = LoginPage();
      break;
    case 'signup':
      app.innerHTML = RegisterForm();
      break;
    case 'checkout':
      app.innerHTML = CheckoutPage();
      break;
    case 'success':
      app.innerHTML = SuccessMessage();
      break;
    default:
      app.innerHTML = `<p>Page not found</p>`;
  }
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-page]');
  if (!target) return;

  event.preventDefault();
  const page = target.getAttribute('data-page');
  navigateTo(page);
});

navigateTo('home');

