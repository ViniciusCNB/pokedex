import { Battle } from '@app/entities/battle';
import { BattleRepository } from '@app/repositories/battle-repository';
import { Injectable } from '@nestjs/common';

interface FindBattleResponse {
  battle: Battle;
}

interface FindBattleRequest {
  id: string;
}

@Injectable()
export class FindBattle {
  constructor(private battleRepository: BattleRepository) {}

  async execute(request: FindBattleRequest): Promise<FindBattleResponse> {
    const { id } = request;

    const battle = await this.battleRepository.find(id);

    return {
      battle,
    };
  }
}
