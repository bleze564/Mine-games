import searchImg from '../images/search.png';

const gameContainerEl = document.getElementById('1');

gameContainerEl.insertAdjacentHTML(
  'beforeend',
  `<div class="date__div">
  <form class="date__form">
    <label class="date__label">
      <input class="date__input" type="number" placeholder="Введіть рік народження" />
      <button class="date__btn" type="submit">
        <img src="${searchImg}" alt="search" />
      </button>
    </label>
  </form>
  <p class="date__text-true">Ви народилися у високосний рік!</p>
  <p class="date__text-false show">Ви народилися не у високосний рік!</p>
</div>`
);

function currentYear(year) {
  return year % 4 === 0;
}
const form = document.querySelector('.date__form');
const input = document.querySelector('.date__input');
const textTrue = document.querySelector('.date__text-true');
const textFalse = document.querySelector('.date__text-false');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const year = parseInt(input.value);
  if (currentYear(year)) {
    textTrue.style.display = 'block';
    textFalse.style.display = 'none';
  } else {
    textTrue.style.display = 'none';
    textFalse.style.display = 'block';
  }
});
