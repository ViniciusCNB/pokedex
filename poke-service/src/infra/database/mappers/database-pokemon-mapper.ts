import { Pokemon } from '@app/entities/pokemon';

export class DatabasePokemonMapper {
  static toCreate(pokemon: Pokemon) {
    return `INSERT INTO Pokemon
    VALUES (
      '${pokemon.id}',
      '${pokemon.trainerId}',
      '${pokemon.localId}',
      '${pokemon.imageURL}',
      '${pokemon.name}',
      '${pokemon.nickname}',
      '${pokemon.type}',
      '${pokemon.gender}',
      '${pokemon.weight.value}',
      '${pokemon.createdAt.toISOString()}'
    );
    `;
  }

  static toDelete(id: string) {
    return `
      DELETE
      FROM Pokemon
      WHERE id = '${id}';
    `;
  }

  static toFind(id: string) {
    return `
      SELECT *
      FROM Pokemon
      WHERE id = '${id}';
    `;
  }

  static toFindAll() {
    return `SELECT * FROM Pokemon;`;
  }
}
