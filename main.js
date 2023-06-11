import './src/index.css';
import './node_modules/flowbite/dist/flowbite.min.js';

const body = document.querySelector('body');
const themeToggleBtn = document.querySelector('.theme-toggle-btn');

themeToggleBtn.addEventListener('click', toggleTheme);
// themeToggleBtn.onclick = toggleTheme

function toggleTheme() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.add('dark');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}
