const pokemonCard = (pokemon) => {
  const card = ''
    + '<div class="col-xl-3 col-md-4 col-xs-12 p-2">'
    + '          <div class="card">'
    + '            <img'
    + `              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"`
    + '              alt="pokemon"'
    + '              class="card-img-top img-pokemon"'
    + '            />'
    + '            <div class="card-body">'
    + '              <div class="row">'
    + '                <div class="col-6">'
    + `                  <h5 class="card-title">${pokemon.name}</h5>`
    + '                </div>'
    + '                <div class="col-6 d-flex justify-content-center">'
    + '                  <i class="fas fa-heart"></i>'
    + '                  <p class="ms-2">5 Likes</p>'
    + '                </div>'
    + '              </div>'
    + '              <div class="row">'
    + '                <div class="col-12">'
    + `                  <button class="btn btn-primary w-100" id="${pokemon.name}">Comments</button>`
    + '                </div>'
    + '              </div>'
    + '            </div>'
    + '          </div>'
    + '        </div>'
    + '';

  return card;
};

export default pokemonCard;
