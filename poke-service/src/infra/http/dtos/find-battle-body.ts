import { IsNotEmpty, IsUUID } from 'class-validator';

export class FindBattleBody {
  @IsNotEmpty()
  @IsUUID()
  pokemonId1: string;

  @IsNotEmpty()
  @IsUUID()
  pokemonId2: string;
}
