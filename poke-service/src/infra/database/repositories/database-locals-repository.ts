import { Local } from '@app/entities/local';
import { LocalRepository } from '@app/repositories/local-repository';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { DatabaseLocalMapper } from '../mappers/database-local-mapper';

@Injectable()
export class DatabaseLocalsRepository implements LocalRepository {
  private pool;
  private client;

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
  }

  async create(local: Local): Promise<void> {
    const query = {
      text: DatabaseLocalMapper.toCreate(local),
    };

    try {
      this.client = await this.pool.connect();

      await this.client.query(query);
      console.log('Create local successful!');
    } catch (error) {
      throw new Error(`Create local error!\n${error}`);
    } finally {
      this.client.release();
    }
  }
  async update(newLocal: Local, id: string): Promise<void> {
    const query = {
      text: DatabaseLocalMapper.toUpdate(newLocal, id),
    };

    try {
      this.client = await this.pool.connect();

      await this.client.query(query);
      console.log('Update local successful!');
    } catch (error) {
      throw new Error(`Update local error!\n${error}`);
    } finally {
      this.client.release();
    }
  }

  async find(id: string): Promise<Local> {
    const query = {
      text: DatabaseLocalMapper.toFind(id),
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);
      console.log('Find local successful!');

      return response;
    } catch (error) {
      throw new Error(`Find local error!\n${error}`);
    } finally {
      this.client.release();
    }
  }

  async findAll(): Promise<Local[]> {
    const query = {
      text: DatabaseLocalMapper.toFindAll(),
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);
      console.log('Find all locals successful!');

      return response;
    } catch (error) {
      throw new Error(`Find all locals error!\n${error}`);
    } finally {
      this.client.release();
    }
  }
}
