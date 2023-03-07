import { Pokemon } from '@app/entities/pokemon';

export abstract class PokemonRepository {
  abstract create(pokemon: Pokemon): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract find(id: string): Promise<Pokemon>;
  abstract findAll(): Promise<Pokemon[]>;
}
