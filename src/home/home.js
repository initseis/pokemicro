import {
  getPokemons,
  getLikes,
  getDataLikes,
  setDataLikes,
  updatePokemonLike,
  saveLike,
} from './api';
import pokemonCard from './components/pokemonCard';
import displayModal from '../js-scripts/modal.js';

const countElements = () => {
  const total = document.getElementById('pokemon-container').childElementCount;
  return total;
};

const updateDomLike = (pokemon) => {
  updatePokemonLike(pokemon);
  const pokemonLocalLikes = getDataLikes();
  const domLike = document.getElementById(`like-${pokemon}`);
  const findPokemon = pokemonLocalLikes.find((obj) => obj.item_id === pokemon);
  domLike.innerHTML = findPokemon.likes;
};

const addLike = (e) => {
  const pokemonLike = e.target.getAttribute('data-pokemon');
  const result = saveLike(pokemonLike);
  result.then(() => updateDomLike(pokemonLike));
};

const initializeHome = () => {
  const pokemonContainer = document.getElementById('pokemon-container');
  const likes = getLikes();
  likes
    .then((response) => response.json())
    .then((likes) => {
      const result = getPokemons();
      result
        .then((response) => response.json())
        .then(({ results }) => {
          setDataLikes(likes);
          results.forEach((pokemon, index) => {
            const pokemonLike = likes.find(
              (element) => element.item_id === pokemon.name
            );
            pokemon.id = index + 1;
            pokemon.likes = pokemonLike ? pokemonLike.likes : '';
            pokemonContainer.insertAdjacentHTML(
              'beforeend',
              pokemonCard(pokemon)
            );
            const likeBtn = document.querySelectorAll('#btnLike');
            likeBtn.forEach((btn) => {
              btn.addEventListener('click', addLike);
            });
          });
          document.getElementById('totalCount').innerHTML = countElements();
          const btnModal = document.querySelectorAll('button');
          btnModal.forEach((btn) => {
            btn.addEventListener('click', displayModal);
          });
        });
    });
};

export default initializeHome;
