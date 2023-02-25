import { Body, Controller, Post } from '@nestjs/common';
import { CreatePokemon } from 'src/app/use-cases/create-pokemon';
import { CreatePokemonBody } from '../dtos/create-pokemon-body';

@Controller('pokemon')
export class PokemonsController {
  constructor(private createPokemon: CreatePokemon) {}

  @Post('create')
  async create(@Body() body: CreatePokemonBody) {
    const { name, type, gender, weight } = body;

    const { pokemon } = await this.createPokemon.execute({
      name,
      type,
      gender,
      weight,
    });

    return { pokemon };
  }
}
