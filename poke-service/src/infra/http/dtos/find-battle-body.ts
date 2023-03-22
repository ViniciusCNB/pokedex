import { IsNotEmpty, IsUUID } from 'class-validator';

export class FindBattleBody {
  @IsNotEmpty()
  @IsUUID()
  pokemonId: string;
}
