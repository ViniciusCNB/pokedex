import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTrainerBody {
  @IsNotEmpty()
  @IsUUID()
  localId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;
}
