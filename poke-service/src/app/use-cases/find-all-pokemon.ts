import { Pokemon } from '@app/entities/pokemon';
import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '../../app/repositories/pokemon-repository';

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
