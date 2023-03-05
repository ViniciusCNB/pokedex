import { IsNotEmpty, IsUUID } from 'class-validator';

export class FindLocalBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
