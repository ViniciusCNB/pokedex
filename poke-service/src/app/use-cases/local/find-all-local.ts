import { Local } from '@app/entities/local';
import { LocalRepository } from '@app/repositories/local-repository';
import { Injectable } from '@nestjs/common';

interface FindAllLocalResponse {
  local: Local[];
}

@Injectable()
export class FindAllLocal {
  constructor(private localRepository: LocalRepository) {}

  async execute(): Promise<FindAllLocalResponse> {
    console.log('Antes da chamada do método no use-case');
    const local = await this.localRepository.findAll();

    return {
      local,
    };
  }
}
