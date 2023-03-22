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

  static toFind(battle: Battle[]) {
    return {
      battles: battle['rows'],
      count: battle['rowCount'],
    };
  }

  static toFindAll(battle: Battle[]) {
    return {
      battles: battle['rows'],
      count: battle['rowCount'],
    };
  }
}
