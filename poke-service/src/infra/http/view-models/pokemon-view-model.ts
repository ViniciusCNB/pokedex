import { Pokemon } from '@app/entities/pokemon';

export class PokemonViewModel {
  static toCreate(pokemon: Pokemon) {
    return {
      name: pokemon.name,
      nickname: pokemon.nickname,
    };
  }

  static toDelete(id: string) {
    return {
      id,
    };
  }

  static toFind(pokemon: Pokemon) {
    console.log(pokemon['rows'][0].trainerId);
    return {
      id: pokemon['rows'][0].id,
      trainerId: pokemon['rows'][0].trainerid,
      localId: pokemon['rows'][0].localid,
      imageURL: pokemon['rows'][0].imageurl,
      name: pokemon['rows'][0].name,
      nickname: pokemon['rows'][0].nickname,
      type: pokemon['rows'][0].type,
      gender: pokemon['rows'][0].gender,
      weight: pokemon['rows'][0].weight,
      createdAt: pokemon['rows'][0].createdat,
    };
  }

  static toFindAll(pokemon: Pokemon[]) {
    return {
      pokemons: pokemon['rows'],
      count: pokemon['rowCount'],
    };
  }
}
