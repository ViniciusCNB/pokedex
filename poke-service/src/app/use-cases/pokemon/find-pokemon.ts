import { Pokemon } from '@app/entities/pokemon';
import { PokemonRepository } from '@app/repositories/pokemon-repository';
import { Injectable } from '@nestjs/common';

interface FindPokemonResponse {
  pokemon: Pokemon;
}

interface FindPokemonRequest {
  id: string;
}

@Injectable()
export class FindPokemon {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute(request: FindPokemonRequest): Promise<FindPokemonResponse> {
    const { id } = request;

    const pokemon = await this.pokemonRepository.find(id);

    return {
      pokemon,
    };
  }
}
