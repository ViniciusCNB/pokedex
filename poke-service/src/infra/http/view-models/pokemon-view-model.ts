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
      id: pokemon['rows'][0].id,
      trainerId: pokemon['rows'][0].trainerId,
      localId: pokemon['rows'][0].localId,
      imageURL: pokemon['rows'][0].imageURL,
      name: pokemon['rows'][0].name,
      nickname: pokemon['rows'][0].nickname,
      type: pokemon['rows'][0].type,
      gender: pokemon['rows'][0].gender,
      weight: pokemon['rows'][0].weight,
      createdAt: pokemon['rows'][0].createdAt,
    };
  }

  static toFindAll(pokemon: Pokemon[]) {
    return {
      pokemons: pokemon['rows'],
      count: pokemon['rowCount'],
    };
  }
}
