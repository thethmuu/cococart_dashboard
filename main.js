import './src/index.css';
import './node_modules/flowbite/dist/flowbite.min.js';

const body = document.querySelector('body');
const themeToggleBtn = document.querySelector('.theme-toggle-btn');

let theme = 'light';

window.addEventListener('DOMContentLoaded', loadTheme);

function loadTheme() {
  theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    body.classList.add('dark');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    body.classList.remove('dark');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

themeToggleBtn.addEventListener('click', toggleTheme);
// themeToggleBtn.onclick = toggleTheme

function toggleTheme() {
  theme === 'light' ? (theme = 'dark') : (theme = 'light');
  localStorage.setItem('theme', theme);
  loadTheme();
}
