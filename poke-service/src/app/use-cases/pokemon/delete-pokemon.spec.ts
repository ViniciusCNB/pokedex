import { InMemoryPokemonsRepository } from '../../../../test/repositories/in-memory-pokemons-repository';
import { CreatePokemon } from './create-pokemon';
import { DeletePokemon } from './delete-pokemon';

describe('DeletePokemon', () => {
  it('should be able to delete a pokemon', async () => {
    const pokemonsRepository = new InMemoryPokemonsRepository();
    const createPokemon = new CreatePokemon(pokemonsRepository);
    const deletePokemon = new DeletePokemon(pokemonsRepository);

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

    const deleteRequest = {
      id: pokemon.id,
    };

    const { id } = await deletePokemon.execute(deleteRequest);

    expect(pokemonsRepository.pokemons).toHaveLength(0);
    expect(deleteRequest.id).toEqual(id);
  });
});
