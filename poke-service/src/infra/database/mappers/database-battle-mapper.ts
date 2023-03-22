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

  static toFind(pokemonId: string) {
    return `
    SELECT 
      p1.name AS pokemonName1,
      p1.nickname AS pokemonNickname1,
      p1.id AS pokemonId1,
      p2.name AS pokemonName2,
      p2.nickname AS pokemonNickname2,
      p2.id AS pokemonId2,
      t1.name AS trainerName1,
      t1.id AS trainerId1,
      t2.name AS trainerName2,
      t2.id AS trainerId2,
      l.name AS localName,
      l.id AS localId,
      p3.id AS winnerId
    FROM Battle b
      JOIN Pokemon p1 ON b.pokemonId1 = p1.id
      JOIN Pokemon p2 ON b.pokemonId2 = p2.id
      JOIN Trainer t1 ON b.trainerId1 = t1.id
      JOIN Trainer t2 ON b.trainerId2 = t2.id
      JOIN Local l ON b.localId = l.id
      JOIN Pokemon p3 ON b.winnerId = p3.id
    WHERE (b.pokemonId1 = '${pokemonId}' OR b.pokemonId2 = '${pokemonId}');
    `;
  }

  static toFindAll() {
    return `
      SELECT *
      FROM Battle;
    `;
  }
}
