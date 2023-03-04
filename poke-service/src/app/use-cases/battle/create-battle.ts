import { Battle } from '@app/entities/battle';
import { BattleRepository } from '@app/repositories/battle-repository';
import { Injectable } from '@nestjs/common';

interface CreateBattleResponse {
  battle: Battle;
}

interface CreateBattleRequest {
  localId: string;
  trainerId1: string;
  trainerId2: string;
  pokemonId1: string;
  pokemonId2: string;
  winnerId: string;
}

Injectable();
export class CreateBattle {
  constructor(private battleRepository: BattleRepository) {}

  async execute(request: CreateBattleRequest): Promise<CreateBattleResponse> {
    const {
      localId,
      pokemonId1,
      pokemonId2,
      trainerId1,
      trainerId2,
      winnerId,
    } = request;

    const battle = new Battle({
      localId,
      pokemonId1,
      pokemonId2,
      trainerId1,
      trainerId2,
      winnerId,
    });

    await this.battleRepository.create(battle);

    return {
      battle,
    };
  }
}
