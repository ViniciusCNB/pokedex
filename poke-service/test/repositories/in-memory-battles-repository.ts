import { Battle } from '@app/entities/battle';
import { BattleRepository } from '@app/repositories/battle-repository';

export class InMemoryBattlesRepository implements BattleRepository {
  public battles: Battle[] = [];

  async create(battle: Battle): Promise<void> {
    this.battles.push(battle);
  }
  async delete(id: string): Promise<void> {
    const index = this.battles.findIndex((battle) => battle.id == id);
    this.battles.splice(index, 1);
  }
  async find(id: string): Promise<Battle> {
    return this.battles.find((battle) => battle.id == id);
  }
  async findAll(): Promise<Battle[]> {
    return this.battles;
  }
}
