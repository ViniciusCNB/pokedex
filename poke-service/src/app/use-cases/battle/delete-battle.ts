import { Injectable } from '@nestjs/common';
import { BattleRepository } from '../../../app/repositories/battle-repository';

interface DeleteBattleResponse {
  id: string;
}

interface DeleteBattleRequest {
  id: string;
}

@Injectable()
export class DeleteBattle {
  constructor(private battleRepository: BattleRepository) {}

  async execute(request: DeleteBattleRequest): Promise<DeleteBattleResponse> {
    const { id } = request;

    await this.battleRepository.delete(id);

    return {
      id,
    };
  }
}
