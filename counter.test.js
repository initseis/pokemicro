/**
 * @jest-environment jsdom
 */

import pokemonCard from './src/home/components/pokemonCard';
import { countElements } from './src/home/home';

describe('Testing the pokemons display counter function', () => {
  test('Count three pokemons', () => {
    const pokemons = [
      { name: 'poke1', id: 1, likes: 1 },
      { name: 'poke2', id: 1, likes: 1 },
      { name: 'poke3', id: 1, likes: 1 },
    ];
    // Arrange
    const pokemonContainer = document.createElement('div');
    pokemonContainer.id = 'pokemon-container';
    pokemons.forEach((pokemon) => {
      pokemonContainer.insertAdjacentHTML('beforeend', pokemonCard(pokemon));
      pokemonCard(pokemon);
    });

    document.body.append(pokemonContainer);

    // Act
    const elemets = countElements();

    // Assert
    expect(elemets).toBe(3);
  });

  test('To be the same as the lenght of items in API', () => {
    const APIResponse = [
      { name: 'poke1', id: 1, likes: 1 },
      { name: 'poke2', id: 1, likes: 1 },
      { name: 'poke3', id: 1, likes: 1 },
    ];
    // Arrange
    const pokemonContainer = document.createElement('div');
    pokemonContainer.id = 'pokemon-container';
    APIResponse.forEach((pokemon) => {
      pokemonContainer.insertAdjacentHTML('beforeend', pokemonCard(pokemon));
      pokemonCard(pokemon);
    });

    document.body.append(pokemonContainer);

    // Act
    const elemets = countElements();

    // Assert
    expect(elemets).toBe(APIResponse.length);
  });
});
