import { Trainer } from '@app/entities/trainer';

export class TrainerViewModel {
  static toCreate(trainer: Trainer) {
    return {
      id: trainer.id,
      name: trainer.name,
    };
  }

  static toDelete(id: string) {
    return {
      id,
    };
  }

  static toFind(trainer: Trainer) {
    return {
      id: trainer.id,
      localId: trainer.localId,
      name: trainer.name,
      age: trainer.age,
    };
  }

  static toFindAll(trainer: Trainer[]) {
    return {
      trainers: trainer['rows'],
      count: trainer['rowCount'],
    };
  }
}
