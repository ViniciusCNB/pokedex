import { PokemonRepository } from '@app/repositories/pokemon-repository';
import { Module } from '@nestjs/common';
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
