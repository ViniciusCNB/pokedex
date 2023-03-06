import { CreateTrainer } from '@app/use-cases/trainer/create-trainer';
import { DeleteTrainer } from '@app/use-cases/trainer/delete-trainer';
import { FindAllTrainer } from '@app/use-cases/trainer/find-all-trainer';
import { FindTrainer } from '@app/use-cases/trainer/find-trainer';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateTrainerBody } from '../dtos/create-trainer-body';
import { DeleteTrainerBody } from '../dtos/delete-trainer-body';
import { FindTrainerBody } from '../dtos/find-trainer-body';
import { TrainerViewModel } from '../view-models/trainer-view-model';

@Controller('trainer')
export class TrainerController {
  constructor(
    private createTrainer: CreateTrainer,
    private deleteTrainer: DeleteTrainer,
    private findTrainer: FindTrainer,
    private findAllTrainer: FindAllTrainer,
  ) {}

  @Post('create')
  async create(@Body() body: CreateTrainerBody) {
    const { localId, name, age } = body;

    try {
      const { trainer } = await this.createTrainer.execute({
        localId,
        name,
        age,
      });

      return TrainerViewModel.toCreate(trainer);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Create trainer error!',
        error: error,
      };
    }
  }

  @Delete('delete')
  async delete(@Body() body: DeleteTrainerBody) {
    const { id } = body;

    try {
      const response = await this.deleteTrainer.execute({ id });

      return TrainerViewModel.toDelete(response.id);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Delete trainer error!',
        error: error,
      };
    }
  }

  @Get('find')
  async find(@Body() body: FindTrainerBody) {
    const { id } = body;

    try {
      const { trainer } = await this.findTrainer.execute({ id });

      return TrainerViewModel.toFind(trainer);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Find trainer error!',
        error: error,
      };
    }
  }

  @Get('find-all')
  async findAll() {
    try {
      const { trainer } = await this.findAllTrainer.execute();

      return TrainerViewModel.toFindAll(trainer);
    } catch (error) {
      return {
        title: 'Error',
        message: 'Find all trainers error!',
        error: error,
      };
    }
  }
}
