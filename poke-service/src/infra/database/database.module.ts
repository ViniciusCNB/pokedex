import { Module } from '@nestjs/common';
import { PokemonRepository } from 'src/app/repositories/pokemon-repository';
import { DatabaseService } from './database.service';
import { DatabasePokemonsRepository } from './repositories/database-pokemons-repository';

@Module({
  providers: [
    DatabaseService,
    {
      provide: PokemonRepository,
      useClass: DatabasePokemonsRepository,
    },
  ],
  exports: [PokemonRepository],
})
export class DatabaseModule {}
