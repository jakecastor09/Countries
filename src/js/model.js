import { async } from 'regenerator-runtime';
export const state = {
  countries: [],
  countriesDetailsData: [],
};

const createCountryDetailsObj = function (details) {
  const data = details[0];
  console.log(data);

  const languages = data.languages.map(lan => lan.name).join(',');
  const borderCountries = data.borders.map(name => name);
  const countryDetails = {
    flag: data.flag,
    name: data.name,
    population: data.population,
    region: data.region,
    capital: data.capital,
    nativeName: data.nativeName,
    subregion: data.subregion,
    topLevelDomain: data.topLevelDomain,
    currencies: data.currencies[0].name,
    languages,
    borderCountries,
  };

  console.log(countryDetails);
  state.countriesDetailsData = countryDetails;
};

const createContriesObjMain = function (data) {
  const countries = data.map(data => {
    return {
      flag: data.flag,
      name: data.name,
      population: data.population,
      region: data.region,
      capital: data.capital,
    };
  });
  state.countries = countries;
};

export const AJAX = async function (search, region, countryDetails = false) {
  try {
    const res = await fetch(
      `${
        (search && `https://restcountries.eu/rest/v2/name/${search}`) ||
        (region && `https://restcountries.eu/rest/v2/region/${region}`) ||
        'https://restcountries.eu/rest/v2/all'
      }`
    );
    const data = await res.json();
    if (!countryDetails) createContriesObjMain(data);
    if (countryDetails) createCountryDetailsObj(data);
  } catch (err) {
    console.log(err);
    throw Error('Something went wrong!');
  }
};
