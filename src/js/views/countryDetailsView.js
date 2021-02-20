import View from './View.js';
class CountryDetailsView extends View {
  _parentElement = document.querySelector('.country');
  _formSearchBar = document.querySelector('.form__search-bar');
  _formFilter = document.querySelector('.form__filter');
  _backBtn = document.querySelector('.btn');

  addHandlerDetails(handler) {
    this._parentElement.addEventListener('click', e => {
      const country = e.target.closest('.country__item');
      if (!country) return;
      const countryTitle = country.dataset.title;
      this._formFilter.classList.add('hidden');
      this._formSearchBar.classList.add('hidden');
      this._backBtn.classList.remove('hidden');
      console.log(countryTitle);
      handler(countryTitle);
    });
  }

  addHandlerDetailsBack(handler) {
    this._backBtn.addEventListener('click', () => {
      this._formFilter.classList.remove('hidden');
      this._formSearchBar.classList.remove('hidden');
      this._backBtn.classList.add('hidden');
      handler();
    });
  }

  _generateMarkup() {
    const data = this._data;
    console.log(data);
    const markup = ` 
    <div class="countryDetails">
    <img src="${data.flag}" alt="${data.name}" class="coutryDetails__flag" />
    <div class="countryDetails__info">
      <div class="countryDetails__title">${data.name}</div>
      <div class="countryDetails__list">
        <div class="countryDetails__item1">
          <h3><span class="text-bold-2">Native Name: </span>${
            data.nativeName
          }</h3>
          <h3><span class="text-bold-2">Population: </span>${
            data.population
          }</h3>
          <h3><span class="text-bold-2">Region: </span>${data.region}</h3>
          <h3>
            <span class="text-bold-2">Sub Region: </span>${data.subregion}
          </h3>
          <h3><span class="text-bold-2">Capital: </span>${data.capital}</h3>
        </div>
        <div class="countryDetails__item2">
          <h3><span class="text-bold-2">Top Level Domain: </span>${
            data.topLevelDomain
          }</h3>
          <h3><span class="text-bold-2">Currencies: </span>${
            data.currencies
          }</h3>
          <h3>
            <span class="text-bold-2">Languages: </span>${data.languages}
          </h3>
        </div>
      </div>

      <div class="countryDetails__borderCountries">
        <h3><span class="text-bold-2">Border Countries: </span></h3>

        ${data.borderCountries
          .map(country => {
            return `
          <div class="countryDetails__btn">${country}</div>`;
          })
          .join('')}

      </div>
    </div>
  </>`;

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new CountryDetailsView();
