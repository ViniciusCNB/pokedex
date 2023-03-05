import { IsNotEmpty } from 'class-validator';

export class CreateLocalBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
