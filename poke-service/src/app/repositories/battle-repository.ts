import { Battle } from '@app/entities/battle';

export abstract class BattleRepository {
  abstract create(battle: Battle): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract find(pokemonId: string): Promise<Battle[]>;
  abstract findAll(): Promise<Battle[]>;
}
