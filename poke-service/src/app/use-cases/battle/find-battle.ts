import { Battle } from '@app/entities/battle';
import { Injectable } from '@nestjs/common';
import { BattleRepository } from '../../../app/repositories/battle-repository';

interface FindBattleResponse {
  battle: Battle[];
}

interface FindBattleRequest {
  pokemonId: string;
}

@Injectable()
export class FindBattle {
  constructor(private battleRepository: BattleRepository) {}

  async execute(request: FindBattleRequest): Promise<FindBattleResponse> {
    const { pokemonId } = request;

    const battle = await this.battleRepository.find(pokemonId);

    return {
      battle,
    };
  }
}
