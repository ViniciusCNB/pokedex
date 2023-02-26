import databaseConfig from '@config/database.config';
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  private pool;

  constructor() {
    this.pool = new Pool(databaseConfig);
  }

  async connectDatabase() {
    try {
      const client = await this.pool.connect();

      console.log('Connection Ok!');

      client.release();
    } catch (error) {
      console.log('Error connection!\n', error);
    }
  }

  public getPool() {
    return this.pool;
  }
}
