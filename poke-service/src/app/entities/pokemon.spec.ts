import { Pokemon } from './pokemon';
import { Weight } from './weight';

describe('Pokemon', () => {
  it('should be able to create a pokemon', () => {
    const pokemon = new Pokemon({
      name: 'Pikachu',
      type: 'Elétrico',
      gender: 'Macho',
      weight: new Weight(32),
    });

    expect(pokemon).toBeTruthy();
  });
});
