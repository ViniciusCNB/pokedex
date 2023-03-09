import { CreatePokemon } from '@app/use-cases/pokemon/create-pokemon';
import { DeletePokemon } from '@app/use-cases/pokemon/delete-pokemon';
import { FindAllPokemon } from '@app/use-cases/pokemon/find-all-pokemon';
import { FindPokemon } from '@app/use-cases/pokemon/find-pokemon';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreatePokemonBody } from '../dtos/create-pokemon-body';
import { FindPokemonBody } from '../dtos/find-pokemon-body';
import { PokemonViewModel } from '../view-models/pokemon-view-model';

@Controller('pokemon')
export class PokemonsController {
  constructor(
    private createPokemon: CreatePokemon,
    private deletePokemon: DeletePokemon,
    private findPokemon: FindPokemon,
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

  @Delete('find')
  async delete(@Body() body: FindPokemonBody) {
    const { id } = body;

    try {
      const response = await this.deletePokemon.execute({ id });
    } catch (error) {
      return {
        title: 'Error',
        message: 'Delete pokemon error!',
        error: error,
      };
    }
  }

  @Get('find')
  async find(@Body() body: FindPokemonBody) {
    const { id } = body;

    try {
      const { pokemon } = await this.findPokemon.execute({ id });
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
