import { Trainer } from '@app/entities/trainer';
import { TrainerRepository } from '@app/repositories/trainer-repository';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { DatabaseTrainerMapper } from '../mappers/database-trainer-mapper';

@Injectable()
export class DatabaseTrainersRepository implements TrainerRepository {
  private pool;
  private client;

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
  }

  async create(trainer: Trainer): Promise<void> {
    const query = {
      text: DatabaseTrainerMapper.toCreate(trainer),
    };

    try {
      this.client = await this.pool.connect();

      await this.client.query(query);
      console.log('Create trainer successful!');
    } catch (error) {
      throw new Error(`Create trainer error!\n${error}`);
    } finally {
      this.client.release();
    }
  }

  async delete(id: string): Promise<void> {
    const query = {
      text: DatabaseTrainerMapper.toDelete(id),
    };

    try {
      this.client = await this.pool.connect();

      await this.client.query(query);
      console.log('Delete trainer successful!');
    } catch (error) {
      throw new Error(`Delete trainer error!\n${error}`);
    } finally {
      this.client.release();
    }
  }

  async find(id: string): Promise<Trainer> {
    const query = {
      text: DatabaseTrainerMapper.toFind(id),
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);
      console.log('Find trainer successful');

      return response;
    } catch (error) {
      throw new Error(`Find trainer error!\n${error}`);
    } finally {
      this.client.release();
    }
  }

  async findAll(): Promise<Trainer[]> {
    const query = {
      text: DatabaseTrainerMapper.toFindAll(),
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);
      console.log('Find all trainers successful!');

      return response;
    } catch (error) {
      throw new Error(`Find all trainers error!\n${error}`);
    } finally {
      this.client.release();
    }
  }
}
