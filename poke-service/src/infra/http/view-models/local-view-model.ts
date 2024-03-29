import { Local } from '@app/entities/local';

export class LocalViewModel {
  static toCreate(local: Local) {
    return {
      id: local.id,
      name: local.name,
    };
  }

  static toUpdate(newLocal: Local) {
    return {
      name: newLocal.name,
    };
  }

  static toFind(local: Local) {
    return {
      id: local['rows'][0].id,
      name: local['rows'][0].name,
      description: local['rows'][0].description,
    };
  }

  static toFindAll(local: Local[]) {
    return {
      locals: local['rows'],
      count: local['rowCount'],
    };
  }
}
