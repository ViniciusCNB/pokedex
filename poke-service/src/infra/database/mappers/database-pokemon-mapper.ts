import { Pokemon } from '@app/entities/pokemon';

export class DatabasePokemonMapper {
  static toCreate(pokemon: Pokemon) {
    return `INSERT INTO Pokemon(id, localId, imageURL, name, type, gender, weight, createdAt)
    VALUES (
      '${pokemon.id}',
      '${pokemon.localId}',
      '${pokemon.imageURL}',
      '${pokemon.name}',
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
