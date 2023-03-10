import { Trainer } from '@app/entities/trainer';
import { TrainerRepository } from '@app/repositories/trainer-repository';
import { Injectable } from '@nestjs/common';

interface FindAllTrainerResponse {
  trainer: Trainer[];
}

@Injectable()
export class FindAllTrainer {
  constructor(private trainerRepository: TrainerRepository) {}

  async execute(): Promise<FindAllTrainerResponse> {
    const trainer = await this.trainerRepository.findAll();

    return {
      trainer,
    };
  }
}
