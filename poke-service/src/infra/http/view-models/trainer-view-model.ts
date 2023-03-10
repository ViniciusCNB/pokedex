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
      id: trainer['rows'][0].id,
      localId: trainer['rows'][0].localId,
      name: trainer['rows'][0].name,
      age: trainer['rows'][0].age,
    };
  }

  static toFindAll(trainer: Trainer[]) {
    return {
      trainers: trainer['rows'],
      count: trainer['rowCount'],
    };
  }
}
