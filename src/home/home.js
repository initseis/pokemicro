import { getPokemons } from './api';

const initializeHome = () => {
  const result = getPokemons();
  result
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((pokemon, index) => {
        pokemon.id = index + 1;
        console.log(pokemon);
      });
    });
};

export { initializeHome };
