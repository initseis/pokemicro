import { capitalize } from '../../js-scripts/strings.js';

const pokemonCard = (pokemon) => {
  const card = ''
    + '<div class="col-xl-3 col-md-4 col-xs-12 p-2">'
    + '          <div class="card pt-3">'
    + '            <img'
    + `              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"`
    + '              alt="pokemon"'
    + '              class="card-img-top img-pokemon"'
    + '            />'
    + '            <div class="card-body">'
    + '              <div class="row">'
    + '                <div class="col-8">'
    + `                  <h5 class="card-title">${capitalize(
      pokemon.name,
    )}</h5>`
    + '                </div>'
    + '                <div class="col-4 d-flex justify-content-center">'
    + `                  <a href="#" ><i id="btnLike" data-pokemon="${pokemon.name}" class="fas fa-heart"></i></a>`
    + `                  <p class="ms-2 hearts" id="like-${pokemon.name}">${pokemon.likes}</p>`
    + '                </div>'
    + '              </div>'
    + '              <div class="row">'
    + '                <div class="col-12">'
    + `                  <button class="btn w-100" id="${pokemon.name}" data-bs-toggle="modal" data-bs-target="#pokemonModal">Comments</button>`
    + '                </div>'
    + '              </div>'
    + '            </div>'
    + '          </div>'
    + '        </div>'
    + '';

  return card;
};

export default pokemonCard;
