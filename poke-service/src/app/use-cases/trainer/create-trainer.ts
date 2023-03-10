import { Injectable } from '@nestjs/common';
import { Age } from '../../../app/entities/age';
import { Trainer } from '../../../app/entities/trainer';
import { TrainerRepository } from '../../../app/repositories/trainer-repository';

interface CreateTrainerResponse {
  trainer: Trainer;
}

interface CreateTrainerRequest {
  localId: string;
  name: string;
  age: number;
}

@Injectable()
export class CreateTrainer {
  constructor(private trainerRepository: TrainerRepository) {}

  async execute(request: CreateTrainerRequest): Promise<CreateTrainerResponse> {
    const { localId, name, age } = request;

    const trainer = new Trainer({
      localId,
      name,
      age: new Age(age),
    });

    await this.trainerRepository.create(trainer);

    return {
      trainer,
    };
  }
}
