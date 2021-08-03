import getPokemons from "./api";
import pokemonCard from "./components/pokemonCard";
import displayModal from "../js-scripts/modal.js";

const initializeHome = () => {
  const pokemonContainer = document.getElementById("pokemon-container");
  const result = getPokemons();
  result
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((pokemon, index) => {
        pokemon.id = index + 1;
        pokemonContainer.insertAdjacentHTML("beforeend", pokemonCard(pokemon));
      });
      const btnModal = document.querySelectorAll("button");
      console.log(btnModal);
      btnModal.forEach((btn) => {
        btn.addEventListener("click", displayModal);
      });
    });
};

export default initializeHome;
