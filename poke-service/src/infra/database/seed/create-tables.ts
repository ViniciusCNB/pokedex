import { DatabaseService } from '../database.service';

class CreateTables {
  private pool;
  private client;
  private tables: object[];

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
    this.tables = [];

    //Local table
    this.tables.push({
      text: `CREATE TABLE IF NOT EXISTS Local (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL
      );
      `,
    });

    //Trainer table
    this.tables.push({
      text: `CREATE TABLE IF NOT EXISTS Trainer (
        id UUID PRIMARY KEY,
        localId UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        age INT NOT NULL,
        FOREIGN KEY (localId) REFERENCES Local(id)  
      );
      `,
    });

    //Pokemon Table
    this.tables.push({
      text: `CREATE TABLE IF NOT EXISTS Pokemon (
        id UUID PRIMARY KEY,
        trainerId UUID NOT NULL,
        localId UUID NOT NULL,
        imageURL VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        nickname VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        gender VARCHAR(255) NOT NULL,
        weight NUMERIC NOT NULL,
        createdAt TIMESTAMP NOT NULL,
        FOREIGN KEY (localId) REFERENCES Local(id),  
        FOREIGN KEY (trainerId) REFERENCES Trainer(id)
          ON DELETE CASCADE  
      );`,
    });

    //Battle table
    this.tables.push({
      text: `CREATE TABLE IF NOT EXISTS Battle (
        id UUID PRIMARY KEY,
        localId UUID NOT NULL,
        trainerId1 UUID NOT NULL,
        trainerId2 UUID NOT NULL,
        pokemonId1 UUID NOT NULL,
        pokemonId2 UUID NOT NULL,
        winnerId UUID NOT NULL,
        FOREIGN KEY (localId) REFERENCES Local(id),  
        FOREIGN KEY (trainerId1) REFERENCES Trainer(id)
          ON DELETE CASCADE,  
        FOREIGN KEY (trainerId2) REFERENCES Trainer(id)
          ON DELETE CASCADE,  
        FOREIGN KEY (pokemonId1) REFERENCES Pokemon(id)
          ON DELETE CASCADE,  
        FOREIGN KEY (pokemonId2) REFERENCES Pokemon(id)
          ON DELETE CASCADE,  
        FOREIGN KEY (winnerId) REFERENCES Pokemon(id)
          ON DELETE CASCADE  
      );
      `,
    });

    this.execute();
  }

  async execute(): Promise<void> {
    try {
      this.client = await this.pool.connect();

      this.tables.map(async (table) => {
        await this.client.query(table);
      });

      console.log('Created tables successful!');
    } catch (error) {
      throw new Error(`Create tables error!\n${error}`);
    } finally {
      this.client.release();
    }
  }
}

new CreateTables(new DatabaseService());
