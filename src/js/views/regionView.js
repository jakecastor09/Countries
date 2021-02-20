import View from './View.js';

class RegionView extends View {
  _errorMsg = 'Region not found!!';
  _selectRegion = document.querySelector('.form__filter-items');

  addHandlerFilter(handler) {
    this._selectRegion.addEventListener('change', function (e) {
      handler(e.target.value);
    });
  }
}

export default new RegionView();
