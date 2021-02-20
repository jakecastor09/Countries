import View from './View.js';
class MainView extends View {
  _generateMarkup() {
    let markup = this._data
      .map(data => {
        return `
              <div class="country__item" data-title="${data.name}">
                    <div class="img-container">
                        <img src="${data.flag}" class="country__img" alt="${data.name}" />
                    </div>
                    <h1 class="country__title">${data.name}</h1>
                    <div class="country__details">
                      <div class="country__population">
                        <span class="text-bold">Population: </span>${data.population}
                      </div>
                      <div class="country__region">
                        <span class="text-bold">Region:</span> ${data.region}
                      </div>
                      <div class="country__capital">
                        <span class="text-bold">Capital: </span>${data.capital}
                      </div>
                    </div>
                </div>
              
              `;
      })
      .join('');
    markup =
      `
          <div class="country__list">` +
      markup +
      `</div>`;

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new MainView();
