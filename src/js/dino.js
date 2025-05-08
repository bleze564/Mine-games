const gameContainerEl = document.getElementById('7');
gameContainerEl.insertAdjacentHTML(
  'afterbegin',
  `<div class="game-wrapper">
  <div id="game">
    <div id="dino"></div>
    <button id="startBtn">Старт</button>
  </div>
</div>`
);
const dino = document.getElementById('dino');
const startBtn = document.getElementById('startBtn');
let isJumping = false;
let cactusInterval;
let collisionInterval;
function createCactus() {
  const cactus = document.createElement('div');
  cactus.classList.add('cactus');
  document.getElementById('game').appendChild(cactus);
  setTimeout(() => cactus.remove(), 2000);
}
function checkCollision() {
  const dinoRect = dino.getBoundingClientRect();
  const cactusElements = document.querySelectorAll('.cactus');
  cactusElements.forEach(cactus => {
    const cactusRect = cactus.getBoundingClientRect();
    if (
      dinoRect.left < cactusRect.right &&
      dinoRect.right > cactusRect.left &&
      dinoRect.bottom > cactusRect.top &&
      dinoRect.top < cactusRect.bottom
    ) {
      dino.classList.add('dead');
      clearInterval(cactusInterval);
      clearInterval(collisionInterval);
      setTimeout(() => {
        alert('Game Over!');
        location.reload();
      }, 500);
    }
  });
}
function startGame() {
  cactusInterval = setInterval(createCactus, 2000);
  collisionInterval = setInterval(checkCollision, 100);
  startBtn.remove();
}
document.addEventListener('click', function () {
  if (startBtn.parentNode) return;
  if (!isJumping) {
    isJumping = true;
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
      isJumping = false;
    }, 500);
  }
});
startBtn.addEventListener('click', startGame);
