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

  static toFindAll(pokemon: Pokemon[]) {
    return {
      pokemons: pokemon['rows'],
      count: pokemon['rowCount'],
    };
  }
}
