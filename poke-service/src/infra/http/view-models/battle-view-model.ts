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
      id: battle.id,
      localId: battle.localId,
      trainerId1: battle.trainerId1,
      trainerId2: battle.trainerId2,
      pokemonId1: battle.pokemonId1,
      pokemonId2: battle.pokemonId2,
      winnerId: battle.winnerId,
    };
  }

  static toFindAll(battle: Battle[]) {
    return {
      battles: battle['rows'],
      count: battle['rowCount'],
    };
  }
}
