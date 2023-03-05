import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteLocalBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
