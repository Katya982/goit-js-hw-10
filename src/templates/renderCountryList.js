export function renderCountryList({ flags, name }) {
    return `
    <li class="country-list__item">
           <img src="${flags.svg}" alt="Flag of ${name.official}" width="30" hight="20">
           <b>${name.official}</p>
    </li>
    `;
};