import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import {renderCountryList} from './templates/renderCountryList';
import {renderOneCountry} from './templates/renderOneCountry';

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),  
};
const DEBOUNCE_DELAY = 300;
refs.input.addEventListener( 'input', debounce( onInputCountry, DEBOUNCE_DELAY));

function  onInputCountry (event) {
  const trimedValue = refs.input.value.trim();
  if (trimedValue === '') {
    cleanHtml();
    return;
  };

fetchCountries(trimedValue).then(countriesData => {  
    cleanHtml();    
    if (countriesData.length > 10) {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');

    }  else if  (countriesData.length === 0) {
      Notiflix.Notify.failure("Oops, there is no country with that name");
      
    } else if (countriesData.length >= 2 && countriesData.length <= 10) {
      const markup = countriesData.map(country => renderCountryList(country));
      refs.countryList.innerHTML = markup;
     
    } else if (countriesData.length === 1) {
      const markup = countriesData.map(country => renderOneCountry(country));
      refs.countryInfo.innerHTML = markup;
    } 
  });
    
};
function cleanHtml() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
};