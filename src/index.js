import 'bootstrap/dist/css/bootstrap.min.css';

const btnModal = document.querySelectorAll('button');

const capitalize = (text) => {
  const lowercase = text.toLowerCase();
  return text.charAt(0).toUpperCase() + lowercase.slice(1);
};

const displayComments = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Vlgir6luyMApwO9KpUDb/comments?item_id=${id}`,
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json())
    .then((comments) => {
      const commentsDiv = document.querySelector('#comments');
      commentsDiv.innerHTML = '';
      const commentsQuantity = document.createElement('h4');
      comments.length === undefined
        ? (commentsQuantity.innerHTML = 'Comments (0)')
        : (commentsQuantity.innerHTML = `Comments (${comments.length})`);
      commentsDiv.appendChild(commentsQuantity);
      comments.forEach((element) => {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
        commentsDiv.appendChild(paragraph);
      });
    });
};

const displayModal = async (event) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${event.target.id}`,
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json())
    .then((pokemon) => {
      document.querySelector('#pokemon-name').innerHTML = pokemon.forms[0].name;
      document.querySelector('#pokemon-img').src = pokemon.sprites.other.dream_world.front_default;
      let types = 'Type:';
      pokemon.types.map((element) => {
        types += `<span class="ms-1 badge bg-secondary">${element.type.name}</span>`;
      });
      document.querySelector('#pokemon-type').innerHTML = types;
      let abilities = 'Abilities: ';
      pokemon.abilities.map((element, i) => {
        pokemon.abilities.length === i + 1
          ? (abilities += capitalize(element.ability.name))
          : (abilities = `${abilities + capitalize(element.ability.name)}, `);
      });
      document.querySelector('#pokemon-abilities').innerHTML = abilities;
      String(pokemon.height).length === 1
        ? (document.querySelector(
          '#pokemon-height',
        ).innerHTML = `Height: 0.${pokemon.height} mt`)
        : (document.querySelector(
          '#pokemon-height',
        ).innerHTML = `Height: ${Number(pokemon.height / 10)} mt`);
      String(pokemon.weight).length === 1
        ? (document.querySelector(
          '#pokemon-weight',
        ).innerHTML = `Weight: 0.${pokemon.weight} kg`)
        : (document.querySelector(
          '#pokemon-weight',
        ).innerHTML = `Weight: ${Number(pokemon.weight / 10)} kg`);
      displayComments(event.target.id);
    });
};

btnModal.forEach((btn) => {
  btn.addEventListener('click', displayModal);
});
