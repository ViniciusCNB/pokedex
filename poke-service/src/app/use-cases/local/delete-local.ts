import { LocalRepository } from '@app/repositories/local-repository';
import { Injectable } from '@nestjs/common';

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
