import { Injectable } from '@nestjs/common';
import { LocalRepository } from '../../../app/repositories/local-repository';

interface DeleteLocalResponse {
  id: string;
}

interface DeleteLocalRequest {
  id: string;
}

@Injectable()
export class DeleteLocal {
  constructor(private localRepository: LocalRepository) {}

  async execute(request: DeleteLocalRequest): Promise<DeleteLocalResponse> {
    const { id } = request;

    await this.localRepository.delete(id);

    return {
      id,
    };
  }
}
