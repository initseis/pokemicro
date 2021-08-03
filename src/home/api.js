const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';

const getPokemons = async () => {
  const result = fetch(pokeURL);
  return result;
};

export default getPokemons;
