import { Battle } from '@app/entities/battle';
import { BattleRepository } from '@app/repositories/battle-repository';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';

@Injectable()
export class DatabaseBattlesRepository implements BattleRepository {
  private pool;
  private client;

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
  }

  async create(battle: Battle): Promise<void> {
    const query = {
      text: '',
    };

    try {
      this.client = await this.pool.connect();

      await this.client.query(query);
      console.log('Create battle successful');
    } catch (error) {
      console.log('Create battle error!\n', error);
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
      console.log('Delete trainer successful');
    } catch (error) {
      console.log('Delete trainer error!\n', error);
    } finally {
      this.client.release();
    }
  }
  async find(id: string): Promise<Battle> {
    const query = {
      text: '',
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);
      console.log('Find trainer successful');

      return response;
    } catch (error) {
      console.log('Find trainer error!\n', error);
    } finally {
      this.client.release();
    }
  }
  async findAll(): Promise<Battle[]> {
    const query = {
      text: '',
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);
      console.log('Find all battles successful');

      return response;
    } catch (error) {
      console.log('Find all battles error!\n', error);
    } finally {
      this.client.release();
    }
  }
}
