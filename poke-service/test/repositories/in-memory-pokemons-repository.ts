import { Pokemon } from '@app/entities/pokemon';
import { PokemonRepository } from '@app/repositories/pokemon-repository';

export class InMemoryPokemonsRepository implements PokemonRepository {
  public pokemons: Pokemon[] = [];

  async create(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }
}
