import { Pokemon } from './pokemon';
import { Weight } from './weight';

describe('Pokemon', () => {
  it('should be able to create a pokemon', () => {
    const pokemon = new Pokemon({
      id: 1,
      localId: '2344234',
      imageURL:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      name: 'Pikachu',
      type: 'Elétrico',
      gender: 'Macho',
      weight: new Weight(32),
    });

    expect(pokemon).toBeTruthy();
  });
});
