import { Injectable } from '@nestjs/common';
import { Pokemon } from '../entities/pokemon';
import { Weight } from '../entities/weight';
import { PokemonRepository } from '../repositories/pokemon-repository';

interface CreatePokemonResponse {
  pokemon: Pokemon;
}

interface CreatePokemonRequest {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  gender: string;
  weight: number;
}

@Injectable()
export class CreatePokemon {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute(request: CreatePokemonRequest): Promise<CreatePokemonResponse> {
    const { id, imageURL, name, type, gender, weight } = request;

    const pokemon = new Pokemon({
      id,
      imageURL,
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
