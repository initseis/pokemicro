import { capitalize, blankInputs } from "./strings.js";
import { displayComments } from "./comments.js";
import { getPokemon } from "./API.js";

const form = document.querySelector("#add-comment");

const displayModal = async (event) => {
  const response = getPokemon(event.target.id);
  response.then((pokemon) => {
    document.querySelector("#pokemon-name").innerHTML = capitalize(
      pokemon.name
    );
    document.querySelector("#pokemon-img").src =
      pokemon.sprites.other.dream_world.front_default;
    document.querySelector("#pokemon-img").width = "226";
    document.querySelector("#pokemon-img").height = "218";
    let types = "Type:";
    pokemon.types.map((element) => {
      types += `<span class="ms-1 badge ${element.type.name}">${element.type.name}</span>`;
    });
    document.querySelector("#pokemon-type").innerHTML = types;
    let abilities = "Abilities: ";
    pokemon.abilities.map((element, i) => {
      pokemon.abilities.length === i + 1
        ? (abilities += capitalize(element.ability.name))
        : (abilities = `${abilities + capitalize(element.ability.name)}, `);
    });
    document.querySelector("#pokemon-abilities").innerHTML = abilities;
    String(pokemon.height).length === 1
      ? (document.querySelector(
          "#pokemon-height"
        ).innerHTML = `Height: 0.${pokemon.height} mt`)
      : (document.querySelector(
          "#pokemon-height"
        ).innerHTML = `Height: ${Number(pokemon.height / 10)} mt`);
    String(pokemon.weight).length === 1
      ? (document.querySelector(
          "#pokemon-weight"
        ).innerHTML = `Weight: 0.${pokemon.weight} kg`)
      : (document.querySelector(
          "#pokemon-weight"
        ).innerHTML = `Weight: ${Number(pokemon.weight / 10)} kg`);
    displayComments(pokemon.id);
    blankInputs();
    form[2].value = pokemon.id;
  });
};

export default displayModal;
