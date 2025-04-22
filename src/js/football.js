'use strict';

const title = document.createElement('h2');
title.textContent = 'Футбол';
document.body.appendChild(title);


const field = document.createElement('div');
field.classList.add('field');
document.body.appendChild(field);


const ball = document.createElement('img');
ball.classList.add('ball');
ball.alt = "М'яч";
ball.src = '/football.png';
field.appendChild(ball);


field.addEventListener('mousemove', (e) => {
  const rect = field.getBoundingClientRect();
  const x = e.clientX - rect.left - ball.offsetWidth / 2;
  const y = e.clientY - rect.top - ball.offsetHeight / 2;

  const maxX = field.clientWidth - ball.offsetWidth;
  const maxY = field.clientHeight - ball.offsetHeight;

  ball.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
  ball.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
});