$(document).ready(function () {
  $('.slider').slick();
});
const popup = document.querySelector('.popup');
const popupVideo = document.querySelector('.popup__container');
const escapeButton = document.querySelector('.popup__escape');
const openButton = document.querySelector('.about__button');

//закрыть форму через esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc)
  };
};

//открыть/закрыть
function togglePopup(element) {
  if (!element.classList.contains('popup_opened')) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
  }
  else {
    element.classList.remove('popup_opened');
  }
}

//закрыть форму через оверлэй
document.addEventListener('click', function (evt) {
  evt.target.classList.remove('popup_opened');
  //остановим всплытие
  evt.stopPropagation();
});

openButton.addEventListener('click', () => togglePopup(popup));
escapeButton.addEventListener('click', () => togglePopup(popup));