export default class View {
  _parentElement = document.querySelector('.country');
  _errorMsg = 'Opps, Something went wrong!';
  _data;

  render(data) {
    if (!data) return;
    this._data = data;

    this._clear();
    this._generateMarkup();
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
              <img src='loading.png' alt="Spinner" class="spinner__img" />
        </div>
        `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError() {
    const markup = `
      <div class="message">
        <h1 class="message__error">${this._errorMsg}</h1>
      </div>
      `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
