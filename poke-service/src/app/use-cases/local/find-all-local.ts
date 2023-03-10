import { Local } from '@app/entities/local';
import { Injectable } from '@nestjs/common';
import { LocalRepository } from '../../../app/repositories/local-repository';

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
