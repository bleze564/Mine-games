import searchImg from '../images/search.png';
const gameContainerEl = document.getElementById('5');
gameContainerEl.insertAdjacentHTML(
  'beforeend',
  `<div class="time__div">
    <form class="time__form">
      <label class="time__label">
        <input class="time__input" type="number" placeholder="Введіть минути">
      </label>
    </form>
    <button class="time__btn" type="submit"><img src="${searchImg}" alt="search"></button>
    <span class="time__span">..........................</span>
    <p class="time__text">3 дн. 15:45:01</p>
  </div>`
);
const form = document.querySelector('.time__form');
const input = document.querySelector('.time__input');
const output = document.querySelector('.time__text');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const value = input.value;
  if (value === '' || value < 0) {
    output.textContent = 'Введіть положитільне чісло';
    return;
  }
  const totalMinutes = parseInt(value);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  let timeString = '';
  if (hours > 0) {
    timeString += `${hours} ${hours === 1 ? 'година' : 'годин'} `;
  }
  if (minutes > 0) {
    timeString += `${minutes} ${minutes === 1 ? 'хвилина' : 'хвилин'}`;
  }
  output.style.opacity = '0';
  setTimeout(() => {
    output.textContent = timeString || '0 хвилин';
    output.style.opacity = '1';
  }, 300);
});
