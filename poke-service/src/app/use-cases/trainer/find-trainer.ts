import { Trainer } from '@app/entities/trainer';
import { Injectable } from '@nestjs/common';
import { TrainerRepository } from '../../../app/repositories/trainer-repository';

interface FindTrainerResponse {
  trainer: Trainer;
}

interface FindTrainerRequest {
  id: string;
}

@Injectable()
export class FindTrainer {
  constructor(private trainerRepository: TrainerRepository) {}

  async execute(request: FindTrainerRequest): Promise<FindTrainerResponse> {
    const { id } = request;

    const trainer = await this.trainerRepository.find(id);

    return {
      trainer,
    };
  }
}
