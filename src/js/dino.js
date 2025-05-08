// const gameContainerEl = document.getElementById('7');

// // Вставка HTML в body
// gameContainerEl.insertAdjacentHTML("afterbegin", `
//     <div id="game">
//       <div id="dino"></div>
//     </div>
//   `);
  
//  // Добавляем кактус каждые 2 сек
// function createCactus() {
//     const cactus = document.createElement('div');
//     cactus.classList.add('cactus');
//     document.getElementById('game').appendChild(cactus);
  
//     // Удаляем кактус после окончания анимации
//     setTimeout(() => cactus.remove(), 2000);
//   }
  
//   setInterval(createCactus, 2000);
  
//   // Обработка прыжка по клику
//   const dino = document.getElementById('dino');
//   let isJumping = false;
  
//   document.addEventListener('click', function () {
//     if (!isJumping) {
//       isJumping = true;
//       dino.classList.add('jump'); // Начало анимации прыжка
//       setTimeout(() => {
//         dino.classList.remove('jump'); // Конец анимации прыжка
//         isJumping = false;
//       }, 500); // Задержка равная продолжительности анимации
//     }
//   });
  
//   // Проверка на столкновение с кактусами
//   function checkCollision() {
//     const dinoRect = dino.getBoundingClientRect();
//     const cactusElements = document.querySelectorAll('.cactus');
  
//     cactusElements.forEach(cactus => {
//       const cactusRect = cactus.getBoundingClientRect();
  
//       // Проверяем, если динозаврик столкнулся с кактусом
//       if (
//         dinoRect.left < cactusRect.right &&
//         dinoRect.right > cactusRect.left &&
//         dinoRect.bottom > cactusRect.top &&
//         dinoRect.top < cactusRect.bottom
//       ) {
//         // Динозаврик погибает
//         dino.classList.add('dead');
//         setTimeout(() => {
//           alert("Game Over!");
//           location.reload(); // Перезапуск игры
//         }, 500);
//       }
//     });
//   }
  
//   // Проверка столкновений каждые 100ms
//   setInterval(checkCollision, 100);