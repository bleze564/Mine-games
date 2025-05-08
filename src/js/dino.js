const gameContainerEl = document.getElementById('7');
gameContainerEl.insertAdjacentHTML(
  'afterbegin',
  `<div id="game">
      <div id="dino"></div>
    </div>`
);
function createCactus() {
  const cactus = document.createElement('div');
  cactus.classList.add('cactus');
  document.getElementById('game').appendChild(cactus);
  setTimeout(() => cactus.remove(), 2000);
}
setInterval(createCactus, 2000);
const dino = document.getElementById('dino');
let isJumping = false;
document.addEventListener('click', function () {
  if (!isJumping) {
    isJumping = true;
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
      isJumping = false;
    }, 500);
  }
});
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
      setTimeout(() => {
        alert('Game Over!');
        location.reload();
      }, 500);
    }
  });
}
setInterval(checkCollision, 100);
