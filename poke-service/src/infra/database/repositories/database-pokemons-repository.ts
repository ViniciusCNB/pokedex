import { Injectable } from '@nestjs/common';
import { Pokemon } from '../../../app/entities/pokemon';
import { PokemonRepository } from '../../../app/repositories/pokemon-repository';
import { DatabaseService } from '../database.service';

@Injectable()
export class DatabasePokemonsRepository implements PokemonRepository {
  private pool;

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
  }

  async create(pokemon: Pokemon): Promise<void> {
    try {
      const client = this.pool.connect();
      const query = {
        text: ``,
      };
    } catch (error) {
      console.log('Create pokemon error!\nError:', error);
    }
  }
}
