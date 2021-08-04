const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';
const pokeLikeURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Hh95XrOFts64CIu0nZBU/likes';

const getPokemons = async () => {
  const result = fetch(pokeURL);
  return result;
};

const getLikes = async () => {
  const result = fetch(pokeLikeURL);
  return result;
};

const saveLike = async (pokemon) => {
  const result = fetch(pokeLikeURL);
  return result;
};
export { getPokemons, getLikes, saveLike };
