import { Local } from '@app/entities/local';
import { LocalRepository } from '@app/repositories/local-repository';

export class InMemoryLocalsRepository implements LocalRepository {
  public locals: Local[] = [];

  async create(local: Local): Promise<void> {
    this.locals.push(local);
  }

  async update(newLocal: Local, id: string): Promise<void> {
    const index = this.locals.findIndex((local) => local.id == id);
    console.log(index);
    this.locals.splice(index, 1);
    this.locals.push(newLocal);
  }

  async find(id: string): Promise<Local> {
    return this.locals.find((local) => local.id == id);
  }

  async findAll(): Promise<Local[]> {
    return this.locals;
  }
}
