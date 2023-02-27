import { DatabaseService } from '../database.service';

class CreateTables {
  private pool;
  private client;
  private tables: object[];

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
    this.tables = [];

    //Pokemon Table
    this.tables.push({
      text: `CREATE TABLE IF NOT EXISTS pokemon (
        id NUMERIC PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        gender VARCHAR(255) NOT NULL,
        weight NUMERIC NOT NULL,
        createdAt TIMESTAMP
      );`,
    });

    this.execute();
  }

  async execute(): Promise<void> {
    try {
      this.client = await this.pool.connect();

      this.tables.map(async (table) => {
        await this.client.query(table);
      });

      console.log('Created tables!');
    } catch (error) {
      console.log('Error created tables!\n', error);
    } finally {
      this.client.release();
    }
  }
}

new CreateTables(new DatabaseService());
