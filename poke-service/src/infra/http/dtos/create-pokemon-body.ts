import { IsNotEmpty } from 'class-validator';

export class CreatePokemonBody {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  localId: string;

  @IsNotEmpty()
  imageURL: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  weight: number;
}
