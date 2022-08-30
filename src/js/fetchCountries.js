
// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/name/peru
// https://restcountries.com/v3.1/name/united


// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков

export function fetchCountries (name) {
    return fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
    )
        .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
              return [];
          }
        }
        return response.json();
      });
     
      
  };