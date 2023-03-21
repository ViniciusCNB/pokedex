import { CreateBattle } from '@app/use-cases/battle/create-battle';
import { DeleteBattle } from '@app/use-cases/battle/delete-battle';
import { FindAllBattle } from '@app/use-cases/battle/find-all-battle';
import { FindBattle } from '@app/use-cases/battle/find-battle';
import { CreateLocal } from '@app/use-cases/local/create-local';
import { FindAllLocal } from '@app/use-cases/local/find-all-local';
import { FindLocal } from '@app/use-cases/local/find-local';
import { UpdateLocal } from '@app/use-cases/local/update-local';
import { DeletePokemon } from '@app/use-cases/pokemon/delete-pokemon';
import { FindAllPokemon } from '@app/use-cases/pokemon/find-all-pokemon';
import { FindPokemon } from '@app/use-cases/pokemon/find-pokemon';
import { FindPokemonsByTrainerId } from '@app/use-cases/pokemon/find-pokemon-by-trainerId';
import { CreateTrainer } from '@app/use-cases/trainer/create-trainer';
import { DeleteTrainer } from '@app/use-cases/trainer/delete-trainer';
import { FindAllTrainer } from '@app/use-cases/trainer/find-all-trainer';
import { FindTrainer } from '@app/use-cases/trainer/find-trainer';
import { Module } from '@nestjs/common';
import { CreatePokemon } from 'src/app/use-cases/pokemon/create-pokemon';
import { DatabaseModule } from '../database/database.module';
import { BattleController } from './controllers/battle.controller';
import { LocalsController } from './controllers/local.controller';
import { PokemonsController } from './controllers/pokemon.controller';
import { TrainerController } from './controllers/trainer.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    PokemonsController,
    LocalsController,
    TrainerController,
    BattleController,
  ],
  providers: [
    CreatePokemon,
    FindAllPokemon,
    FindPokemon,
    DeletePokemon,
    FindPokemonsByTrainerId,
    CreateLocal,
    UpdateLocal,
    FindLocal,
    FindAllLocal,
    CreateBattle,
    DeleteBattle,
    FindBattle,
    FindAllBattle,
    CreateTrainer,
    DeleteTrainer,
    FindTrainer,
    FindAllTrainer,
  ],
})
export class HttpModule {}
