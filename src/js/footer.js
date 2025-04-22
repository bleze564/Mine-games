const modal = document.getElementById('footerModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = modal.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});