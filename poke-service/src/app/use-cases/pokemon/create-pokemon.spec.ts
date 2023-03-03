import { InMemoryPokemonsRepository } from '../../../../test/repositories/in-memory-pokemons-repository';
import { Pokemon } from '../../entities/pokemon';
import { CreatePokemon } from './create-pokemon';

describe('CreatePokemon', () => {
  it('should be able to create a Pokemon', async () => {
    const pokemonsRepository = new InMemoryPokemonsRepository();

    const createPokemon = new CreatePokemon(pokemonsRepository);
    const request = {
      trainerId: '423423',
      localId: '154353',
      imageURL:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      name: 'Pikachu',
      nickname: 'Zezim',
      type: 'Electric',
      gender: 'Male',
      weight: 60,
    };

    const { pokemon } = await createPokemon.execute(request);

    expect(pokemonsRepository.pokemons).toHaveLength(1);
    expect(pokemonsRepository.pokemons[0]).toEqual(pokemon);
    expect(pokemon).toBeTruthy();
    expect(pokemon).toBeInstanceOf(Pokemon);
    expect(pokemon.name).toEqual(request.name);
    expect(pokemon.type).toEqual(request.type);
    expect(pokemon.gender).toEqual(request.gender);
    expect(pokemon.weight.value).toEqual(request.weight);
  });
});
