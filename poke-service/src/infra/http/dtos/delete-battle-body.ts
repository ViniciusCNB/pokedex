import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteBattleBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
