import { Pokemon } from '@app/entities/pokemon';

export class DatabasePokemonMapper {
  static toCreate(pokemon: Pokemon) {
    return `INSERT INTO Pokemon
    VALUES (
      '${pokemon.trainerId}',
      '${pokemon.localId}',
      '${pokemon.imageURL}',
      '${pokemon.name}',
      '${pokemon.nickname}',
      '${pokemon.type}',
      '${pokemon.gender}',
      '${pokemon.weight.value}',
      '${pokemon.createdAt.toISOString()}'
    )
    `;
  }

  static toFindAll() {
    return `SELECT * FROM Pokemon;`;
  }
}
