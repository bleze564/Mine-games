const gameContainerEl = document.getElementById('10');
import AlbertEinstein from '../images/9.jpg'
import IsaacNewton from '../images/3.jpg'
import GalileoGalilei from '../images/10.jpg'
import MarieCurie from '../images/5.jpg'
import JohannesKepler from '../images/12.jpg'
import Nicolaus from '../images/2.jpg'
import Max from '../images/6.jpg'
import Katherine from '../images/1.jpg'
import Ada from '../images/7.jpg'
import Sarah from '../images/8.jpg'
import Lise from '../images/11.jpg'
import Hanna from '../images/4.jpg'
// Дані з фото
const scientists = [
  { name: 'Albert Einstein', birth: 1879, death: 1955, img: AlbertEinstein},
  { name: 'Isaac Newton', birth: 1643, death: 1727, img: IsaacNewton },
  { name: 'Galileo Galilei', birth: 1564, death: 1642, img: GalileoGalilei },
  { name: 'Marie Curie', birth: 1867, death: 1934, img: MarieCurie },
  { name: 'Johannes Kepler', birth: 1571, death: 1630, img: JohannesKepler },
  { name: 'Nicolaus Copernicus', birth: 1473, death: 1543, img: Nicolaus },
  { name: 'Max Planck', birth: 1858, death: 1947, img: Max },
  { name: 'Katherine Blodgett', birth: 1898, death: 1979, img: Katherine },
  { name: 'Ada Lovelace', birth: 1815, death: 1852, img: Ada },
  { name: 'Sarah E. Goode', birth: 1855, death: 1905, img: Sarah },
  { name: 'Lise Meitner', birth: 1878, death: 1968, img: Lise },
  { name: 'Hanna Hammarström', birth: 1829, death: 1909, img: Hanna },
];

// Заголовок
const title = document.createElement('h2');
title.textContent = 'Вчений';
title.className = 'header-title';
gameContainerEl.appendChild(title);

// Контейнер
const box = document.createElement('div');
box.className = 'container';
gameContainerEl.appendChild(box);

// Функція відображення
function renderCards(data, singleRow = false) {
  box.innerHTML = '';
  box.className = singleRow ? 'box filtered' : 'box';
  data.forEach(sci => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-content">
        <strong>${sci.name}</strong><br>${sci.birth} – ${sci.death}
      </div>
      <img class="card-img" src="${sci.img}" alt="${sci.name}" />
    `;
    box.appendChild(card);
  });
}
renderCards(scientists);

// Кнопки
const actions = document.createElement('div');
actions.className = 'actions';
gameContainerEl.appendChild(actions);

function addButton(text, callback) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.className = 'btn';
  btn.onclick = callback;
  actions.appendChild(btn);
}

// Фільтри
addButton('Відсортувати за кількістю прожитих років', () => {
  const sorted = [...scientists].sort((a, b) => (b.death - b.birth) - (a.death - a.birth));
  renderCards(sorted);
});

addButton('Знайти вченого, який народився найпізніше', () => {
  const latest = Math.max(...scientists.map(s => s.birth));
  renderCards(scientists.filter(s => s.birth === latest), true);
});

addButton('Перші літери імені = прізвищу', () => {
  renderCards(scientists.filter(s => {
    const [first, last] = s.name.split(' ');
    return first?.[0] === last?.[0];
  }), true);
});

addButton('Знайти рік народження Ейнштейна', () => {
  const einstein = scientists.find(s => s.name.includes('Einstein'));
  if (einstein) renderCards([einstein], true);
});

addButton('Прізвища не на "C"', () => {
  renderCards(scientists.filter(s => {
    const last = s.name.split(' ').slice(-1)[0];
    return !last.startsWith('C');
  }));
});

addButton('Видалити вчених з іменем на "A"', () => {
  renderCards(scientists.filter(s => !s.name.startsWith('A')));
});

addButton('Прожив найменше', () => {
  const minLived = Math.min(...scientists.map(s => s.death - s.birth));
  renderCards(scientists.filter(s => (s.death - s.birth) === minLived), true);
});

addButton('Народились у 19 ст.', () => {
  renderCards(scientists.filter(s => s.birth >= 1801 && s.birth <= 1900));
});

