import { Local } from '@app/entities/local';

export class DatabaseLocalMapper {
  static toCreate(local: Local) {
    return `
      INSERT INTO Local
      VALUES (
        '${local.id}',
        '${local.name}',
        '${local.description.value}'
      );
    `;
  }

  static toUpdate(newLocal: Local, id: string) {
    return `
      UPDATE Local
      SET name = '${newLocal.name}', description = '${newLocal.description.value}'
      WHERE id = '${id}';
    `;
  }

  static toFind(id: string) {
    return `
      SELECT *
      FROM Local
      WHERE id = '${id}';
    `;
  }

  static toFindAll() {
    return `
      SELECT * 
      FROM Local;
    `;
  }
}
