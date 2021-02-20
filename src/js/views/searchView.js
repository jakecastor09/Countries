import View from './View.js';
class SearchView extends View {
  _errorMsg = 'Country no found!!';
  _searchInput = document.querySelector('.form__input-search');

  addHandlerSearch(handler) {
    this._searchInput.addEventListener('keyup', function (e) {
      if (e.keyCode === 13) {
        handler(e.target.value);
        e.target.value = '';
      } else {
        handler(e.target.value);
      }
    });
  }
}

export default new SearchView();
