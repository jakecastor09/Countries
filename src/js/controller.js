import * as model from './model.js';
import searchView from './views/searchView.js';
import mainView from './views/mainView.js';
import regionView from './views/regionView.js';
import darkModeView from './views/darkModeView.js';
import countryDetailsView from './views/countryDetailsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const controlContries = async function () {
  try {
    mainView.renderSpinner();
    await model.AJAX();
    mainView.render(model.state.countries);
  } catch (err) {
    mainView.renderError();
    console.log(err);
  }
};

const searchCountries = async function (search) {
  try {
    mainView.renderSpinner();
    await model.AJAX(search);
    console.log(search);

    mainView.render(model.state.countries);
  } catch (err) {
    console.log(err);
    mainView.renderError();
  }
};

const searchByRegion = async function (region) {
  try {
    mainView.renderSpinner();
    await model.AJAX('', region);
    mainView.render(model.state.countries);
  } catch (err) {
    console.log(err);
    mainView.renderError();
  }
};

const countryDetails = async function (country) {
  try {
    countryDetailsView.renderSpinner();
    await model.AJAX(country, '', true);
    countryDetailsView.render(model.state.countriesDetailsData);
  } catch (err) {
    console.log(err);
    countryDetailsView.renderError();
  }
};

controlContries();

const backToMain = function () {
  mainView.render(model.state.countries);
};

const init = function () {
  searchView.addHandlerSearch(searchCountries);
  regionView.addHandlerFilter(searchByRegion);
  darkModeView.addHandlerDarkMode();
  countryDetailsView.addHandlerDetails(countryDetails);
  countryDetailsView.addHandlerDetailsBack(backToMain);
};

init();
