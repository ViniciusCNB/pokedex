import { CreateLocal } from '@app/use-cases/local/create-local';
import { DeleteLocal } from '@app/use-cases/local/delete-local';
import { FindAllLocal } from '@app/use-cases/local/find-all-local';
import { FindLocal } from '@app/use-cases/local/find-local';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateLocalBody } from '../dtos/create-local-body';
import { DeleteLocalBody } from '../dtos/delete-local-body';
import { FindLocalBody } from '../dtos/find-local-body';
import { LocalViewModel } from '../view-models/local-view-model';

@Controller('local')
export class LocalsController {
  constructor(
    private createLocal: CreateLocal,
    private deleteLocal: DeleteLocal,
    private findLocal: FindLocal,
    private findAllLocal: FindAllLocal,
  ) {}

  @Post('create')
  async create(@Body() body: CreateLocalBody) {
    const { name, description } = body;

    try {
      const { local } = await this.createLocal.execute({
        name,
        description,
      });

      return LocalViewModel.toCreate(local);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Create local error!',
        error: error,
      };
    }
  }

  @Delete('delete')
  async delete(@Body() body: DeleteLocalBody) {
    const { id } = body;

    try {
      const response = await this.deleteLocal.execute({
        id,
      });

      return LocalViewModel.toDelete(response.id);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Delete local error!',
        error: error,
      };
    }
  }

  @Get('find')
  async find(@Body() body: FindLocalBody) {
    const { id } = body;

    try {
      const { local } = await this.findLocal.execute({
        id,
      });

      return LocalViewModel.toFind(local);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Find local error!',
        error: error,
      };
    }
  }

  @Get('findAll')
  async findAll() {
    try {
      const { local } = await this.findAllLocal.execute();

      return LocalViewModel.toFindAll(local);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Find all locals error!',
        error: error,
      };
    }
  }
}
