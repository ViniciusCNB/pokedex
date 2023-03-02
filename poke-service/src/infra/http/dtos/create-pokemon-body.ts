import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreatePokemonBody {
  @IsNotEmpty()
  @IsUUID()
  trainerId: string;

  @IsNotEmpty()
  @IsUUID()
  localId: string;

  @IsNotEmpty()
  imageURL: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  weight: number;
}
