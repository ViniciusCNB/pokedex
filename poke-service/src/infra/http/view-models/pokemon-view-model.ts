import { Pokemon } from '@app/entities/pokemon';

export class PokemonViewModel {
  static toCreate(pokemon: Pokemon) {
    return {
      id: pokemon.id,
      name: pokemon.name,
      createdAt: pokemon.createdAt,
    };
  }
}
