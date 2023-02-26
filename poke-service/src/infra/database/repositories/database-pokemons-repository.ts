import { Pokemon } from '@app/entities/pokemon';
import { PokemonRepository } from '@app/repositories/pokemon-repository';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';

@Injectable()
export class DatabasePokemonsRepository implements PokemonRepository {
  private pool;
  private client;

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
  }

  async create(pokemon: Pokemon): Promise<void> {
    const query = {
      text: `INSERT INTO pokemon(id, name, type, gender, weight, createdAt)
      VALUES (
        '${pokemon.id}',
        '${pokemon.name}',
        '${pokemon.type}',
        '${pokemon.gender}',
        '${pokemon.weight.value}',
        '${pokemon.createdAt.toISOString()}'
      )
      `,
    };

    try {
      this.client = await this.pool.connect();

      await this.client.query(query);

      console.log('Pokemon created!');
    } catch (error) {
      console.log('Create pokemon error!\n', error);
    } finally {
      this.client.release();
    }
  }
}
