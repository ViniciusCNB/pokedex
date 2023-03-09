import { Local } from '@app/entities/local';

export abstract class LocalRepository {
  abstract create(local: Local): Promise<void>;
  abstract update(newLocal: Local): Promise<void>;
  abstract find(id: string): Promise<Local>;
  abstract findAll(): Promise<Local[]>;
}
