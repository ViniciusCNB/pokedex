import { Battle } from '@app/entities/battle';

export class BattleViewModel {
  static toCreate(battle: Battle) {
    return {
      id: battle.id,
      pokemonId1: battle.pokemonId1,
      pokemonId2: battle.pokemonId2,
    };
  }

  static toDelete(id: string) {
    return {
      id,
    };
  }

  static toFind(battle: Battle) {
    return {
      id: battle['rows'][0].id,
      localId: battle['rows'][0].localId,
      trainerId1: battle['rows'][0].trainerId1,
      trainerId2: battle['rows'][0].trainerId2,
      pokemonId1: battle['rows'][0].pokemonId1,
      pokemonId2: battle['rows'][0].pokemonId2,
      winnerId: battle['rows'][0].winnerId,
    };
  }

  static toFindAll(battle: Battle[]) {
    return {
      battles: battle['rows'],
      count: battle['rowCount'],
    };
  }
}
