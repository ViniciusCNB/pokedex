import { IsNotEmpty, IsUUID } from 'class-validator';

export class FindPokemonBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
