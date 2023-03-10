import { Local } from '@app/entities/local';
import { Injectable } from '@nestjs/common';
import { LocalRepository } from '../../../app/repositories/local-repository';

interface FindLocalResponse {
  local: Local;
}

interface FindLocalRequest {
  id: string;
}

@Injectable()
export class FindLocal {
  constructor(private localRepository: LocalRepository) {}

  async execute(request: FindLocalRequest): Promise<FindLocalResponse> {
    const { id } = request;

    const local = await this.localRepository.find(id);

    return {
      local,
    };
  }
}
