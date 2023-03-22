import { Battle } from '@app/entities/battle';
import { Injectable } from '@nestjs/common';
import { BattleRepository } from '../../../app/repositories/battle-repository';

interface FindBattleResponse {
  battle: Battle;
}

interface FindBattleRequest {
  pokemonId1: string;
  pokemonId2: string;
}

@Injectable()
export class FindBattle {
  constructor(private battleRepository: BattleRepository) {}

  async execute(request: FindBattleRequest): Promise<FindBattleResponse> {
    const { pokemonId1, pokemonId2 } = request;

    const battle = await this.battleRepository.find(pokemonId1, pokemonId2);

    return {
      battle,
    };
  }
}
