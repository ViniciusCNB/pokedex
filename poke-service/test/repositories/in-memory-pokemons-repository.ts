import { Pokemon } from '../../src/app/entities/pokemon';
import { PokemonRepository } from '../../src/app/repositories/pokemon-repository';

export class InMemoryPokemonsRepository implements PokemonRepository {
  public pokemons: Pokemon[] = [];

  async create(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }
}
