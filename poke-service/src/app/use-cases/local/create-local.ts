import { Description } from '@app/entities/description';
import { Local } from '@app/entities/local';
import { LocalRepository } from '@app/repositories/local-repository';
import { Injectable } from '@nestjs/common';

interface CreateLocalResponse {
  local: Local;
}

interface CreateLocalRequest {
  name: string;
  description: string;
}

@Injectable()
export class CreateLocal {
  constructor(private localRepository: LocalRepository) {}

  async execute(request: CreateLocalRequest): Promise<CreateLocalResponse> {
    const { name, description } = request;

    const local = new Local({
      name,
      description: new Description(description),
    });

    await this.localRepository.create(local);

    return {
      local,
    };
  }
}
