const gameContainerEl = document.querySelector('.js-game');
const games = [
  {
    id: 1,
    name: 'Перевір в який рік ти народився',
    category: 'numerical',
  },
  {
    id: 2,
    name: 'Вгадай число, яке загадав комп’ютер',
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
    name: 'Введіть 3 числа',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    id: 10,
    name: 'Обери вченого/их',
    category: 'acquaintance',
  },
];
const list = games
  .map(game => {
    return `<li id=${game.id}>
        <h2>${game.name}</h2>
        </li>`;
  })
  .join('');
gameContainerEl.insertAdjacentHTML('beforeend', list);
