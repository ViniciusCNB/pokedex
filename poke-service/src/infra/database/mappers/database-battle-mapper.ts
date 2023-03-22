import { Battle } from '@app/entities/battle';

export class DatabaseBattleMapper {
  static toCreate(battle: Battle) {
    return `
      INSERT INTO Battle
      VALUES (
        '${battle.id}',
        '${battle.localId}',
        '${battle.trainerId1}',
        '${battle.trainerId2}',
        '${battle.pokemonId1}',
        '${battle.pokemonId2}',
        '${battle.winnerId}'
      );
    `;
  }

  static toDelete(id: string) {
    return `
      DELETE
      FROM Battle
      WHERE id = '${id}';
    `;
  }

  static toFind(pokemonId1: string, pokemonId2: string) {
    return `
      SELECT *
      FROM Battle
      WHERE pokemonId1 = '${pokemonId1}' OR pokemonId2 = '${pokemonId2}';
    `;
  }

  static toFindAll() {
    return `
      SELECT *
      FROM Battle;
    `;
  }
}
