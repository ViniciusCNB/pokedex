import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeletePokemonBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
