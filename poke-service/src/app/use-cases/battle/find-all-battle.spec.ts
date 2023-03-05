import { InMemoryBattlesRepository } from '../../../../test/repositories/in-memory-battles-repository';
import { CreateBattle } from './create-battle';
import { FindAllBattle } from './find-all-battle';

describe('FindAllBattle', () => {
  it('should be able to find all battles', async () => {
    const battlesRepository = new InMemoryBattlesRepository();
    const createBattle = new CreateBattle(battlesRepository);
    const findAllBattle = new FindAllBattle(battlesRepository);

    const createRequest1 = {
      localId: '1',
      trainerId1: '2',
      trainerId2: '3',
      pokemonId1: '4',
      pokemonId2: '5',
      winnerId: '2',
    };

    const createRequest2 = {
      localId: '6',
      trainerId1: '7',
      trainerId2: '8',
      pokemonId1: '9',
      pokemonId2: '10',
      winnerId: '7',
    };

    const battle1 = await createBattle.execute(createRequest1);
    const battle2 = await createBattle.execute(createRequest2);

    const battles = await findAllBattle.execute();

    expect(battlesRepository.battles).toHaveLength(2);
    expect(battlesRepository.battles[0]).toEqual(battle1.battle);
    expect(battlesRepository.battles[1]).toEqual(battle2.battle);
    expect(battles.battle).toEqual(battlesRepository.battles);
  });
});
