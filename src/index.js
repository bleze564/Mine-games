import "./js/header"
import "./js/main"
import "./js/date-of-birth"
import "./js/guess-number"
import "./js/rock-paper-scirors"
import "./js/calculator"
import "./js/time-calculator"
import "./js/dino"
import "./js/football"
import "./js/three_numbers"
import "./js/our-team"
import "./js/scientist"
import "./js/footer"
const gameContainerEl = document.querySelector('.js-game')

const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
  },
];

const list = games.map((game) => {
  return `<li id=${game.id}>
        <h2>${game.name}</h2>
        </li>`;
});

gameContainerEl.insertAdjacentHTML('afterend', list);
