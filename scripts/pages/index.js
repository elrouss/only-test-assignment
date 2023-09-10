'use strict';

const closeBtnsOnBackground = (evt) => {
  if (evt.target.classList.contains('map')) {
    btns.forEach((btn) => (btn.checked ? btn.checked = false : btn.checked));
  }
};

backgroundImage.addEventListener('click', closeBtnsOnBackground);
