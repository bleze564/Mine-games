'use strict';

// Створення контейнера
const container = document.createElement('div');
container.className = 'input-container';
document.body.appendChild(container);

// Заголовок
const heading = document.createElement('h2');
heading.textContent = 'Введіть 3 числа';
heading.className = 'header-title';
container.appendChild(heading);

// Контейнер інпутів
const inputsDiv = document.createElement('div');
inputsDiv.className = 'inputs';
container.appendChild(inputsDiv);

// Інпути
const inputs = [];
for (let i = 0; i < 3; i++) {
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = 'Введіть число';
  input.className = 'input-number';
  inputs.push(input);
  inputsDiv.appendChild(input);
}

// Результат
const result = document.createElement('div');
result.className = 'result-text';
result.textContent = 'Найбільше число, яке ви ввели - (число)';
container.appendChild(result);

// Логіка
inputs.forEach(input => {
  input.addEventListener('input', () => {
    const values = inputs.map(i => parseFloat(i.value)).filter(n => !isNaN(n));
    if (values.length > 0) {
      const max = Math.max(...values);
      result.textContent = `Найбільше число, яке ви ввели - ${max}`;
    } else {
      result.textContent = 'Найбільше число, яке ви ввели - (число)';
    }
  });
});
