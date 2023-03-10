import { BattleRepository } from '@app/repositories/battle-repository';
import { LocalRepository } from '@app/repositories/local-repository';
import { PokemonRepository } from '@app/repositories/pokemon-repository';
import { TrainerRepository } from '@app/repositories/trainer-repository';
import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseBattlesRepository } from './repositories/database-battles-repository';
import { DatabaseLocalsRepository } from './repositories/database-locals-repository';
import { DatabasePokemonsRepository } from './repositories/database-pokemons-repository';
import { DatabaseTrainersRepository } from './repositories/database-trainers-repository';

@Module({
  providers: [
    DatabaseService,
    {
      provide: LocalRepository,
      useClass: DatabaseLocalsRepository,
    },
    {
      provide: PokemonRepository,
      useClass: DatabasePokemonsRepository,
    },
    {
      provide: TrainerRepository,
      useClass: DatabaseTrainersRepository,
    },
    {
      provide: BattleRepository,
      useClass: DatabaseBattlesRepository,
    },
  ],
  exports: [
    PokemonRepository,
    LocalRepository,
    TrainerRepository,
    BattleRepository,
  ],
})
export class DatabaseModule {}
