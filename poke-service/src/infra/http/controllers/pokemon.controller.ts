import { CreatePokemon } from '@app/use-cases/pokemon/create-pokemon';
import { FindAllPokemon } from '@app/use-cases/pokemon/find-all-pokemon';
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
    const {
      trainerId,
      localId,
      imageURL,
      name,
      nickname,
      type,
      gender,
      weight,
    } = body;

    try {
      const { pokemon } = await this.createPokemon.execute({
        trainerId,
        localId,
        imageURL,
        name,
        nickname,
        type,
        gender,
        weight,
      });

      return PokemonViewModel.toCreate(pokemon);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Created pokemon error!',
        error: error,
      };
    }
  }

  @Get('find-all')
  async findAll() {
    try {
      const { pokemon } = await this.findAllPokemon.execute();

      return PokemonViewModel.toFindAll(pokemon);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Find all pokemons error!',
        error: error,
      };
    }
  }
}
