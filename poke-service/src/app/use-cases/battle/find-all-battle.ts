import { Battle } from '@app/entities/battle';
import { BattleRepository } from '@app/repositories/battle-repository';
import { Injectable } from '@nestjs/common';

interface FindAllBattleResponse {
  battle: Battle[];
}

@Injectable()
export class FindAllBattle {
  constructor(private battleRepository: BattleRepository) {}

  async execute(): Promise<FindAllBattleResponse> {
    const battle = await this.battleRepository.findAll();

    return {
      battle,
    };
  }
}
