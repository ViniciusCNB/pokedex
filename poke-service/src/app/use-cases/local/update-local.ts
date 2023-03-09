import { Injectable } from '@nestjs/common';
import { Description } from '../../../app/entities/description';
import { Local } from '../../../app/entities/local';
import { LocalRepository } from '../../../app/repositories/local-repository';

interface UpdateLocalResponse {
  newLocal: Local;
}

interface UpdateLocalRequest {
  id: string;
  name: string;
  description: string;
}

@Injectable()
export class UpdateLocal {
  constructor(private localRepository: LocalRepository) {}

  async execute(request: UpdateLocalRequest): Promise<UpdateLocalResponse> {
    const { id, name, description } = request;

    const newLocal = new Local({
      name,
      description: new Description(description),
    });

    await this.localRepository.update(newLocal, id);

    return {
      newLocal,
    };
  }
}
