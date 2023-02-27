import { Pokemon } from '@app/entities/pokemon';

export class PokemonViewModel {
  static toCreate(pokemon: Pokemon) {
    return {
      id: pokemon.id,
      imageURL: pokemon.imageURL,
      name: pokemon.name,
      createdAt: pokemon.createdAt,
    };
  }

  static toFindAll(pokemon: Pokemon[]) {
    return {
      pokemon,
      count: pokemon.length,
    };
  }
}
