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

      console.log('Create pokemon successful!');
    } catch (error) {
      throw new Error(`Create pokemon error!\n${error}`);
    } finally {
      this.client.release();
    }
  }

  async delete(id: string): Promise<void> {
    const query = {
      text: DatabasePokemonMapper.toDelete(id),
    };

    try {
      this.client = await this.pool.connect();

      await this.client.query(query);

      console.log('Delete pokemon successful!');
    } catch (error) {
      throw new Error(`Delete pokemon error!\n${error}`);
    } finally {
      this.client.release();
    }
  }

  async findByTrainerId(trainerId: string): Promise<Pokemon[]> {
    const query = {
      text: DatabasePokemonMapper.toFindByTrainerId(trainerId),
    };

    try {
      this.client = await this.pool.connect();

      const pokemon = await this.client.query(query);

      console.log('Find pokemon by trainerId successful!');
      return pokemon;
    } catch (error) {
      throw new Error(`Find pokemon pokemon by trainerId error!\n${error}`);
    } finally {
      this.client.release();
    }
  }

  async find(id: string): Promise<Pokemon> {
    const query = {
      text: DatabasePokemonMapper.toFind(id),
    };

    try {
      this.client = await this.pool.connect();

      const pokemon = await this.client.query(query);

      console.log('Find pokemon successful!');
      return pokemon;
    } catch (error) {
      throw new Error(`Find pokemon error!\n${error}`);
    } finally {
      this.client.release();
    }
  }

  async findAll(): Promise<Pokemon[]> {
    const query = {
      text: DatabasePokemonMapper.toFindAll(),
    };

    try {
      this.client = await this.pool.connect();

      const response = await this.client.query(query);

      console.log('Find all pokemons successful!');
      return response;
    } catch (error) {
      throw new Error(`Find all pokemons error!\n${error}`);
    } finally {
      this.client.release();
    }
  }
}
