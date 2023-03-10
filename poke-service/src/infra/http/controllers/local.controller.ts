import { CreateLocal } from '@app/use-cases/local/create-local';
import { FindAllLocal } from '@app/use-cases/local/find-all-local';
import { FindLocal } from '@app/use-cases/local/find-local';
import { UpdateLocal } from '@app/use-cases/local/update-local';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateLocalBody } from '../dtos/create-local-body';
import { FindLocalBody } from '../dtos/find-local-body';
import { UpdateLocalBody } from '../dtos/update-local-body';
import { LocalViewModel } from '../view-models/local-view-model';

@Controller('local')
export class LocalsController {
  constructor(
    private createLocal: CreateLocal,
    private updateLocal: UpdateLocal,
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
      throw new Error(error);
    }
  }

  @Put('update')
  async update(@Body() body: UpdateLocalBody) {
    const { id, name, description } = body;

    try {
      const response = await this.updateLocal.execute({
        id,
        name,
        description,
      });

      return LocalViewModel.toUpdate(response.newLocal);
    } catch (error) {
      throw new Error(error);
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
      throw new Error(error);
    }
  }

  @Get('find-all')
  async findAll() {
    try {
      const { local } = await this.findAllLocal.execute();

      return LocalViewModel.toFindAll(local);
    } catch (error) {
      throw new Error(error);
    }
  }
}
