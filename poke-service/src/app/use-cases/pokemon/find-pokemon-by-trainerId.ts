import { Injectable } from '@nestjs/common';
import { Pokemon } from '../../../app/entities/pokemon';
import { PokemonRepository } from '../../../app/repositories/pokemon-repository';

interface FindPokemonsByTrainerIdRequest {
  trainerId: string;
}

interface FindPokemonsByTrainerIdResponse {
  pokemon: Pokemon[];
}

@Injectable()
export class FindPokemonsByTrainerId {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute(
    request: FindPokemonsByTrainerIdRequest,
  ): Promise<FindPokemonsByTrainerIdResponse> {
    const { trainerId } = request;

    const pokemon = await this.pokemonRepository.findByTrainerId(trainerId);

    return { pokemon };
  }
}
