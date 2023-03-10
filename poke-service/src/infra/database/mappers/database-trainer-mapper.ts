import { Trainer } from '@app/entities/trainer';

export class DatabaseTrainerMapper {
  static toCreate(trainer: Trainer) {
    return `
      INSERT INTO Trainer
      VALUES (
        '${trainer.id}',
        '${trainer.localId}',
        '${trainer.name}',
        '${trainer.age.value}'
      );
    `;
  }

  static toDelete(id: string) {
    return `
      DELETE
      FROM Trainer
      WHERE id = '${id}';
    `;
  }

  static toFind(id: string) {
    return `
      SELECT *
      FROM Trainer
      WHERE id = '${id}';
    `;
  }

  static toFindAll() {
    return `
      SELECT *
      FROM Trainer;
    `;
  }
}
