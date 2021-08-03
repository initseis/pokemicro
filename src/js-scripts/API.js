const pokeUrl = "https://pokeapi.co/api/v2/pokemon";
const involvementUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Vlgir6luyMApwO9KpUDb";

const getPokemon = async (id) => {
  const response = await fetch(`${pokeUrl}/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};

const getPokemonComments = async (id) => {
  const response = await fetch(`${involvementUrl}/comments?item_id=${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};

const setPokemonComment = async (id, user, commmentary) => {
  const response = await fetch(`${involvementUrl}/comments/`, {
    method: "POST",
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: commmentary,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response;
};

export { getPokemon, getPokemonComments, setPokemonComment };
