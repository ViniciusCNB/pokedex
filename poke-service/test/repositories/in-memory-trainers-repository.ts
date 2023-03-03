import { Trainer } from '@app/entities/trainer';
import { TrainerRepository } from '@app/repositories/trainer-repository';

export class InMemoryTrainersRepository implements TrainerRepository {
  public trainers: Trainer[];

  async create(trainer: Trainer): Promise<void> {
    this.trainers.push(trainer);
  }
  async delete(id: string): Promise<void> {
    const index = this.trainers.findIndex((trainer) => trainer.id == id);
    this.trainers.splice(index, 1);
  }
  async find(id: string): Promise<Trainer> {
    return this.trainers.find((trainer) => trainer.id == id);
  }
  async findAll(): Promise<Trainer[]> {
    return this.trainers;
  }
}
