const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';
const pokeLikeURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Hh95XrOFts64CIu0nZBU/likes';

let dataLikes = [];

const getPokemons = async () => {
  const result = fetch(pokeURL);
  return result;
};

const getLikes = async () => {
  const result = fetch(pokeLikeURL);
  return result;
};

const saveLike = async (pokemon) => {
  //const result = fetch(pokeLikeURL);

  const response = await fetch(pokeLikeURL, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ item_id: pokemon }), // body data type must match "Content-Type" header
  });
  return response;
};

const getDataLikes = () => {
  console.log('get dataLikes', dataLikes);
  return dataLikes;
};

const setDataLikes = (likes) => {
  dataLikes = [...likes];
};

export { getPokemons, getLikes, saveLike, getDataLikes, setDataLikes };
