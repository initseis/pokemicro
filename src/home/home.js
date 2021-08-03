import getPokemons from './api';
import pokemonCard from './components/pokemonCard';

const initializeHome = () => {
  const pokemonContainer = document.getElementById('pokemon-container');
  const result = getPokemons();
  result
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((pokemon, index) => {
        pokemon.id = index + 1;
        pokemonContainer.insertAdjacentHTML('beforeend', pokemonCard(pokemon));
      });
    });
};

export default initializeHome;
