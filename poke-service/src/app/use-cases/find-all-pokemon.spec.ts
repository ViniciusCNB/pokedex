import { InMemoryPokemonsRepository } from '../../../test/repositories/in-memory-pokemons-repository';
import { CreatePokemon } from './create-pokemon';
import { FindAllPokemon } from './find-all-pokemon';

describe('FindAllPokemon', () => {
  it('should return all pokemons', async () => {
    const pokemonsRepository = new InMemoryPokemonsRepository();
    const createPokemon = new CreatePokemon(pokemonsRepository);
    const findAllPokemon = new FindAllPokemon(pokemonsRepository);

    const pokemon1 = {
      id: 1,
      localId: '2344234',
      imageURL: 'teste@image.com',
      name: 'Pikachu',
      type: 'Electric',
      gender: 'Male',
      weight: 32,
    };

    const pokemon2 = {
      id: 2,
      localId: '2344234',
      imageURL: 'teste@image.com',
      name: 'Charmander',
      type: 'Fire',
      gender: 'Female',
      weight: 55,
    };

    const response1 = await createPokemon.execute(pokemon1);
    const response2 = await createPokemon.execute(pokemon2);

    const { pokemon } = await findAllPokemon.execute();

    expect(pokemon).toEqual([response1.pokemon, response2.pokemon]);
  });
});
