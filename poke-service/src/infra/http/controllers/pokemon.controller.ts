import { CreatePokemon } from '@app/use-cases/create-pokemon';
import { FindAllPokemon } from '@app/use-cases/find-all-pokemon';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePokemonBody } from '../dtos/create-pokemon-body';
import { PokemonViewModel } from '../view-models/pokemon-view-model';

@Controller('pokemon')
export class PokemonsController {
  constructor(
    private createPokemon: CreatePokemon,
    private findAllPokemon: FindAllPokemon,
  ) {}

  @Post('create')
  async create(@Body() body: CreatePokemonBody) {
    const { id, localId, imageURL, name, type, gender, weight } = body;

    const { pokemon } = await this.createPokemon.execute({
      id,
      localId,
      imageURL,
      name,
      type,
      gender,
      weight,
    });

    return PokemonViewModel.toCreate(pokemon);
  }

  @Get('find-all')
  async findAll() {
    const { pokemon } = await this.findAllPokemon.execute();

    return PokemonViewModel.toFindAll(pokemon);
  }
}
