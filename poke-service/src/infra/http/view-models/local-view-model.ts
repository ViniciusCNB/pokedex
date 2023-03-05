import { Local } from '@app/entities/local';

export class LocalViewModel {
  static toCreate(local: Local) {
    return {
      id: local.id,
      name: local.name,
    };
  }

  static toDelete(id: string) {
    return {
      id,
    };
  }

  static toFind(local: Local) {
    return {
      id: local.id,
      name: local.name,
      description: local.description,
    };
  }

  static toFindAll(local: Local[]) {
    return {
      locals: local['rows'],
      count: local['rowCount'],
    };
  }
}
