import { Local } from '@app/entities/local';
import { LocalRepository } from '@app/repositories/local-repository';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';

@Injectable()
export class DatabaseLocalsRepository implements LocalRepository {
  private pool;
  private client;

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
  }

  async create(local: Local): Promise<void> {
    const query = {
      text: '',
    };

    try {
      this.client = await this.pool.connect();

      await this.client.query(query);
      console.log('Create local successful!');
    } catch (error) {
      console.log('Create local error\n', error);
    } finally {
      this.client.release();
    }
  }
  async delete(id: string): Promise<void> {
    const query = {
      text: '',
    };

    try {
      this.client = await this.pool.connect();

      await this.client.query(query);
    } catch (error) {
      console.log('Delete local error!\n', error);
    } finally {
      this.client.release();
    }
  }

  async find(id: string): Promise<Local> {
    const query = {
      text: '',
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);
      console.log('Find local successful!');

      return response;
    } catch (error) {
      console.log('Find local error!\n', error);
    } finally {
      this.client.release();
    }
  }
  async findAll(): Promise<Local[]> {
    const query = {
      text: '',
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);
      console.log('Find all locals successful!');

      return response;
    } catch (error) {
      console.log('Find all locals error!\n', error);
    } finally {
      this.client.release();
    }
  }
}
