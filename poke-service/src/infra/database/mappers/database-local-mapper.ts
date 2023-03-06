import { Local } from '@app/entities/local';

export class DatabaseLocalMapper {
  static toCreate(local: Local) {
    return `
      INSERT INTO Local
      VALUES (
        '${local.id}',
        '${local.name}',
        '${local.description}'
      );
    `;
  }

  static toDelete(id: string) {
    return `
      DELETE
      FROM Local
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
      FROM Local
    `;
  }
}
