import { Pokemon } from '@app/entities/pokemon';

export class PokemonViewModel {
  static toCreate(pokemon: Pokemon) {
    return {
      id: pokemon.id,
      imageURL: pokemon.imageURL,
      nickname: pokemon.nickname,
      name: pokemon.name,
    };
  }

  static toDelete(id: string) {
    return {
      id,
    };
  }

  static toFind(pokemon: Pokemon) {
    return {
      id: pokemon.id,
      trainerId: pokemon.trainerId,
      localId: pokemon.localId,
      imageURL: pokemon.imageURL,
      name: pokemon.name,
      nickname: pokemon.nickname,
      type: pokemon.type,
      gender: pokemon.gender,
      weight: pokemon.weight,
      createdAt: pokemon.createdAt,
    };
  }

  static toFindAll(pokemon: Pokemon[]) {
    return {
      pokemons: pokemon['rows'],
      count: pokemon['rowCount'],
    };
  }
}
