import { Module } from '@nestjs/common';
import { CreatePokemon } from 'src/app/use-cases/create-pokemon';
import { DatabaseModule } from '../database/database.module';
import { PokemonsController } from './controllers/pokemon.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PokemonsController],
  providers: [CreatePokemon],
})
export class HttpModule {}
