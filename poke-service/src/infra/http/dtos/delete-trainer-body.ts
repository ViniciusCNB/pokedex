import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteTrainerBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
