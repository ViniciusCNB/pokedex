import { Pokemon } from 'src/app/entities/pokemon';

export abstract class PokemonRepository {
  abstract create(pokemon: Pokemon): Promise<void>;
}
