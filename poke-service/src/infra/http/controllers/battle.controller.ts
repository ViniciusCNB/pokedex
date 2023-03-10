import { CreateBattle } from '@app/use-cases/battle/create-battle';
import { DeleteBattle } from '@app/use-cases/battle/delete-battle';
import { FindAllBattle } from '@app/use-cases/battle/find-all-battle';
import { FindBattle } from '@app/use-cases/battle/find-battle';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateBattleBody } from '../dtos/create-battle-body';
import { DeleteBattleBody } from '../dtos/delete-battle-body';
import { FindBattleBody } from '../dtos/find-battle-body';
import { BattleViewModel } from '../view-models/battle-view-model';

@Controller('battle')
export class BattleController {
  constructor(
    private createBattle: CreateBattle,
    private deleteBattle: DeleteBattle,
    private findBattle: FindBattle,
    private findAllBattle: FindAllBattle,
  ) {}

  @Post('create')
  async create(@Body() body: CreateBattleBody) {
    const {
      localId,
      pokemonId1,
      pokemonId2,
      trainerId1,
      trainerId2,
      winnerId,
    } = body;

    try {
      const { battle } = await this.createBattle.execute({
        localId,
        trainerId1,
        trainerId2,
        pokemonId1,
        pokemonId2,
        winnerId,
      });

      return BattleViewModel.toCreate(battle);
    } catch (error) {
      throw new Error(`Create battle error!\n${error}`);
    }
  }

  @Delete('delete')
  async delete(@Body() body: DeleteBattleBody) {
    const { id } = body;

    try {
      const response = await this.deleteBattle.execute({ id });

      return BattleViewModel.toDelete(response.id);
    } catch (error) {
      throw new Error(`Delete battle error!\n${error}`);
    }
  }

  @Get('find')
  async find(@Body() body: FindBattleBody) {
    const { id } = body;

    try {
      const { battle } = await this.findBattle.execute({ id });

      return BattleViewModel.toFind(battle);
    } catch (error) {
      throw new Error(`Find battle error!\n${error}`);
    }
  }

  @Get('find-all')
  async findAll() {
    try {
      const { battle } = await this.findAllBattle.execute();

      return BattleViewModel.toFindAll(battle);
    } catch (error) {
      throw new Error(`Find all battles error!\n${error}`);
    }
  }
}
