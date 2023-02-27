import { CreatePokemon } from '@app/use-cases/create-pokemon';
import { Body, Controller, Post } from '@nestjs/common';
import { CreatePokemonBody } from '../dtos/create-pokemon-body';
import { PokemonViewModel } from '../view-models/pokemon-view-model';

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

    return PokemonViewModel.toCreate(pokemon);
  }
}
