import { Pokemon } from '@app/entities/pokemon';
import { PokemonRepository } from '@app/repositories/pokemon-repository';

export class InMemoryPokemonsRepository implements PokemonRepository {
  findByTrainerId(trainerId: string): Promise<Pokemon[]> {
    throw new Error('Method not implemented.');
  }
  public pokemons: Pokemon[] = [];

  async create(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  async delete(id: string): Promise<void> {
    const index = this.pokemons.findIndex((pokemon) => pokemon.id == id);
    this.pokemons.splice(index, 1);
  }

  async find(id: string): Promise<Pokemon> {
    return this.pokemons.find((pokemon) => pokemon.id == id);
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemons;
  }
}
