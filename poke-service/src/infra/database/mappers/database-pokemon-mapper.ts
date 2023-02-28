import { Pokemon } from '@app/entities/pokemon';

export class DatabasePokemonMapper {
  static toCreate(pokemon: Pokemon) {
    return `INSERT INTO pokemon(id, imageURL, name, type, gender, weight, createdAt)
    VALUES (
      '${pokemon.id}',
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
    return `SELECT * FROM pokemon;`;
  }
}
