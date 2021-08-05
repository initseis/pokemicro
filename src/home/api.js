const pokeURL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
const pokeLikeURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Hh95XrOFts64CIu0nZBU/likes";

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
  const response = await fetch(pokeLikeURL, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ item_id: pokemon }), // body data type must match "Content-Type" header
  });
  return response;
};

const getDataLikes = () => dataLikes;

const setDataLikes = (likes) => {
  dataLikes = [...likes];
};

const updatePokemonLike = (pokemon) => {
  const findObj = dataLikes.find((obj) => obj.item_id === pokemon);
  if (typeof findObj === "undefined") {
    console.log("push", dataLikes);
    dataLikes.push({
      likes: 1,
      item_id: pokemon,
    });
  } else {
    findObj.likes += 1;
  }
};

export {
  getPokemons,
  getLikes,
  saveLike,
  getDataLikes,
  setDataLikes,
  updatePokemonLike,
};
