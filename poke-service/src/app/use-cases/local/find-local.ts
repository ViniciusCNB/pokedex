import { Local } from '@app/entities/local';
import { LocalRepository } from '@app/repositories/local-repository';
import { Injectable } from '@nestjs/common';

interface FindLocalResponse {
  local: Local;
}

interface FindLocalRequest {
  id: string;
}

Injectable();
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
