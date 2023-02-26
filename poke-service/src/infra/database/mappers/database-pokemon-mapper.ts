import { Pokemon } from '@app/entities/pokemon';

export class DatabasePokemonMapper {
  static toCreate(pokemon: Pokemon) {
    return `INSERT INTO pokemon(id, name, type, gender, weight, createdAt)
    VALUES (
      '${pokemon.id}',
      '${pokemon.name}',
      '${pokemon.type}',
      '${pokemon.gender}',
      '${pokemon.weight.value}',
      '${pokemon.createdAt.toISOString()}'
    )
    `;
  }
}
