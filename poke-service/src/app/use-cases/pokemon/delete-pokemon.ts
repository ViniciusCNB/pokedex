import { PokemonRepository } from '@app/repositories/pokemon-repository';
import { Injectable } from '@nestjs/common';

interface DeletePokemonResponse {
  id: string;
}

interface DeletePokemonRequest {
  id: string;
}

@Injectable()
export class DeletePokemon {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute(request: DeletePokemonRequest): Promise<DeletePokemonResponse> {
    const { id } = request;

    await this.pokemonRepository.delete(id);

    return {
      id,
    };
  }
}
