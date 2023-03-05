import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBattleBody {
  @IsNotEmpty()
  @IsUUID()
  localId: string;

  @IsNotEmpty()
  @IsUUID()
  trainerId1: string;

  @IsNotEmpty()
  @IsUUID()
  trainerId2: string;

  @IsNotEmpty()
  @IsUUID()
  pokemonId1: string;

  @IsNotEmpty()
  @IsUUID()
  pokemonId2: string;

  @IsNotEmpty()
  @IsUUID()
  winnerId: string;
}
