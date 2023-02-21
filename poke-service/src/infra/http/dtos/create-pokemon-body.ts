import { IsNotEmpty } from 'class-validator';

export class CreatePokemonBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  weight: number;
}
