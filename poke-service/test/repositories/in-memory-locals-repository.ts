import { Local } from '@app/entities/local';
import { LocalRepository } from '@app/repositories/local-repository';

export class InMemoryLocalsRepository implements LocalRepository {
  public locals: Local[] = [];

  async create(local: Local): Promise<void> {
    this.locals.push(local);
  }
  async delete(id: string): Promise<void> {
    const index = this.locals.findIndex((local) => local.id == id);
    this.locals.splice(index, 1);
  }
  async find(id: string): Promise<Local> {
    return this.locals.find((local) => local.id == id);
  }
  async findAll(): Promise<Local[]> {
    return this.locals;
  }
}
