import { Injectable } from '@nestjs/common';
import { TrainerRepository } from '../../../app/repositories/trainer-repository';

interface DeleteTrainerResponse {
  id: string;
}

interface DeleteTrainerRequest {
  id: string;
}

@Injectable()
export class DeleteTrainer {
  constructor(private trainerRepository: TrainerRepository) {}

  async execute(request: DeleteTrainerRequest): Promise<DeleteTrainerResponse> {
    const { id } = request;

    await this.trainerRepository.delete(id);

    return {
      id,
    };
  }
}
