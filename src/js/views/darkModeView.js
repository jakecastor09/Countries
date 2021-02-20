import View from './View.js';
class DarkModeView extends View {
  _body = document.querySelector('body');
  _darkmodeBtn = document.querySelector('.navbar__btn-mode');
  _navbar = document.querySelector('.main-navbar');
  _btn = document.querySelector('.btn');

  addHandlerDarkMode() {
    this._darkmodeBtn.addEventListener('click', () => {
      this._body.classList.toggle('dark-2');
      this._navbar.classList.toggle('dark-1');
      this._btn.classList.toggle('dark-2');
      document.querySelector('.form__search-bar').classList.toggle('dark-1');
      document.querySelector('.form__filter-items').classList.toggle('dark-1');
      document
        .querySelector('.form__input-search')
        .classList.toggle('form__input-search-dark');

      document.querySelector('.fa-search').classList.toggle('fa-search-dark');

      document
        .querySelectorAll('.country__item')
        .forEach(item => item.classList.toggle('dark-1'));

      this._darkmodeBtn.classList.toggle('dark-1');

      document.querySelector('.fa-moon').classList.toggle('fa-sun');
    });
  }
}

export default new DarkModeView();
