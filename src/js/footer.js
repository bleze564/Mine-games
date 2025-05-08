const modal = document.getElementById('footerModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = modal.querySelector('.close-btn');
openBtn.addEventListener('click', () => {
  modal.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
  modal.classList.toggle('active');
});
