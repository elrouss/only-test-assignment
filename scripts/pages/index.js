'use strict';

const createBtn = ({ id, label, color }) => {
  const template = templateBtn.cloneNode(true);

  const btn = template.querySelector('.btn');
  const btnInput = btn.querySelector('.btn__input');
  const btnLabel = btn.querySelector('.btn__label');
  const btnText = btn.querySelector('.btn__text');

  btn.classList.add(`btn_place_${id}`);

  btnInput.id = id;
  btnLabel.classList.add(`btn__label_color_${color}`);
  btnLabel.htmlFor = id;
  btnText.textContent = label;

  return btn;
}

const renderBtns = () => {
  btnsData.forEach((btn) => {
    markers.append(createBtn(btn));
  })
}
renderBtns();

const btns = document.querySelectorAll('.btn__input');

const closeBtnsOnBackground = (evt) => {
  if (evt.target.classList.contains('map')
  || evt.target.classList.contains('map__markers')) {
    btns.forEach((btn) => (btn.checked ? btn.checked = false : btn.checked));
  }
};

backgroundImage.addEventListener('click', closeBtnsOnBackground);
