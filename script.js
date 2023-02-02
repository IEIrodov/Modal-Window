'use strict';
const btnAllModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

function showModal() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnAllModal.length; i++)
  btnAllModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
