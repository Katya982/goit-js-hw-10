export function renderOneCountry({ flags, name, capital, population, languages }) {
    return `
      <div class="country__container">
        <div class="country__wrapper">
          <img class="country__flags" src="${flags.svg}" alt="${name.official}" width="50" />
          <h2 class="country__name">${name.official}</h2>
        </div>
        <p class="country__capital"><span class="country__info">Capital:</span> ${capital}</p>
        <p class="country__population"><span class="country__info">Population:</span> ${population}</p>
        <p class="country__languages"><span class="country-info__info">Languages:</span> ${Object.values(
            languages,
        )}</p>
      </div>
    `;
  };