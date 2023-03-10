import { InMemoryBattlesRepository } from '../../../../test/repositories/in-memory-battles-repository';
import { CreateBattle } from './create-battle';
import { FindBattle } from './find-battle';

describe('FindBattle', () => {
  it('should be able to find a battle', async () => {
    const battlesRepository = new InMemoryBattlesRepository();
    const createBattle = new CreateBattle(battlesRepository);
    const findBattle = new FindBattle(battlesRepository);

    const createRequest = {
      localId: '1',
      trainerId1: '2',
      trainerId2: '3',
      pokemonId1: '4',
      pokemonId2: '5',
      winnerId: '5',
    };

    const { battle } = await createBattle.execute(createRequest);

    const findRequest = {
      id: battle.id,
    };

    const battleResponse = await findBattle.execute(findRequest);

    expect(battleResponse.battle).toEqual(battle);
    expect(battlesRepository.battles[0]).toEqual(battleResponse.battle);
    expect(battleResponse.battle.id).toEqual(findRequest.id);
  });
});
