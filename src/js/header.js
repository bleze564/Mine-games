// Додавання логотипу
import logoo from '../images/logoo.png'
const logoContainer = document.getElementById('logo-container');
const logoImg = document.createElement('img');
logoImg.src = logoo;
logoImg.alt = 'Logo';
logoContainer.appendChild(logoImg);

// Перемикач теми
const toggleButton = document.getElementById('themeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleButton.textContent = body.classList.contains('dark') ? '🌙' : '🌞';
});