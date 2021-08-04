import { getPokemons, getLikes } from './api';
import pokemonCard from './components/pokemonCard';

const initializeHome = () => {
  const pokemonContainer = document.getElementById('pokemon-container');
  const likes = getLikes();

  likes
    .then((response) => response.json())
    .then((likes) => {
      //console.log(likes);

      const result = getPokemons();
      result
        .then((response) => response.json())
        .then(({ results }) => {
          results.forEach((pokemon, index) => {
            const pokemonLike = likes.find(
              (element) => element.item_id === pokemon.name
            );
            pokemon.id = index + 1;
            pokemon.likes = pokemonLike ? pokemonLike.likes : '';
            console.log(pokemon);
            pokemonContainer.insertAdjacentHTML(
              'beforeend',
              pokemonCard(pokemon)
            );
          });
        });
    });
};

export default initializeHome;
