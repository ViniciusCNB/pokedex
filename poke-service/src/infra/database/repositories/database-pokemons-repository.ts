import { Pokemon } from '@app/entities/pokemon';
import { PokemonRepository } from '@app/repositories/pokemon-repository';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { DatabasePokemonMapper } from '../mappers/database-pokemon-mapper';

@Injectable()
export class DatabasePokemonsRepository implements PokemonRepository {
  private pool;
  private client;

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
  }

  async create(pokemon: Pokemon): Promise<void> {
    const query = {
      text: DatabasePokemonMapper.toCreate(pokemon),
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

  async findAll(): Promise<Pokemon[]> {
    const query = {
      text: '',
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);

      console.log('Find all pokemons!');
      return response;
    } catch (error) {
      console.log('Find all pokemons error!\n', error);
    } finally {
      this.client.release();
    }
  }
}
