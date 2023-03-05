import { IsNotEmpty, IsUUID } from 'class-validator';

export class FindTrainerBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
