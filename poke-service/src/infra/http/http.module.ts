import { FindAllPokemon } from '@app/use-cases/find-all-pokemon';
import { Module } from '@nestjs/common';
import { CreatePokemon } from 'src/app/use-cases/create-pokemon';
import { DatabaseModule } from '../database/database.module';
import { PokemonsController } from './controllers/pokemon.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PokemonsController],
  providers: [CreatePokemon, FindAllPokemon],
})
export class HttpModule {}
