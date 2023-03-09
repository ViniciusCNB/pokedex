import { InMemoryPokemonsRepository } from '../../../../test/repositories/in-memory-pokemons-repository';
import { CreatePokemon } from './create-pokemon';
import { FindPokemon } from './find-pokemon';

describe('FindPokemon', () => {
  it('should be able to find a pokemon', async () => {
    const pokemonsRepository = new InMemoryPokemonsRepository();
    const createPokemon = new CreatePokemon(pokemonsRepository);
    const findPokemon = new FindPokemon(pokemonsRepository);

    const createRequest = {
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

    const { pokemon } = await createPokemon.execute(createRequest);

    const findRequest = {
      id: pokemon.id,
    };

    const pokemonResponse = await findPokemon.execute(findRequest);

    expect(pokemonResponse.pokemon).toEqual(pokemon);
    expect(pokemonsRepository.pokemons[0]).toEqual(pokemonResponse.pokemon);
    expect(pokemonResponse.pokemon.id).toEqual(pokemon.id);
  });
});
