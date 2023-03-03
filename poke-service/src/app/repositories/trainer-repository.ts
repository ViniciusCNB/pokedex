import { Trainer } from '@app/entities/trainer';

export abstract class TrainerRepository {
  abstract create(trainer: Trainer): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract find(id: string): Promise<Trainer>;
  abstract findAll(): Promise<Trainer[]>;
}
