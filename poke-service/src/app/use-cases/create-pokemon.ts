import { Injectable } from '@nestjs/common';
import { Pokemon } from '../entities/pokemon';
import { Weight } from '../entities/weight';
import { PokemonRepository } from '../repositories/pokemon-repository';

interface CreatePokemonResponse {
  pokemon: Pokemon;
}

interface CreatePokemonRequest {
  name: string;
  type: string;
  gender: string;
  weight: number;
}

@Injectable()
export class CreatePokemon {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute(request: CreatePokemonRequest): Promise<CreatePokemonResponse> {
    const { name, type, gender, weight } = request;

    const pokemon = new Pokemon({
      name,
      type,
      gender,
      weight: new Weight(weight),
    });

    await this.pokemonRepository.create(pokemon);

    return {
      pokemon,
    };
  }
}
