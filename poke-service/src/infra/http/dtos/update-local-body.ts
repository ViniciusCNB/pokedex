import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateLocalBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
