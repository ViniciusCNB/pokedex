import { Pokemon } from '@app/entities/pokemon';
import { PokemonRepository } from '@app/repositories/pokemon-repository';
import { Injectable } from '@nestjs/common';

interface FindAllPokemonResponse {
  pokemon: Pokemon[];
}

@Injectable()
export class FindAllPokemon {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute(): Promise<FindAllPokemonResponse> {
    const pokemon = await this.pokemonRepository.findAll();

    return { pokemon };
  }
}
