import { InMemoryBattlesRepository } from '../../../../test/repositories/in-memory-battles-repository';
import { CreateBattle } from './create-battle';
import { DeleteBattle } from './delete-battle';

describe('DeleteBattle', () => {
  it('should be able to delete a battle', async () => {
    const battlesRepository = new InMemoryBattlesRepository();
    const createBattle = new CreateBattle(battlesRepository);
    const deleteBattle = new DeleteBattle(battlesRepository);

    const createRequest = {
      localId: '1',
      trainerId1: '2',
      trainerId2: '3',
      pokemonId1: '4',
      pokemonId2: '5',
      winnerId: '5',
    };

    const { battle } = await createBattle.execute(createRequest);

    const deleteRequest = {
      id: battle.id,
    };

    const { id } = await deleteBattle.execute(deleteRequest);

    expect(battlesRepository.battles).toHaveLength(0);
    expect(id).toEqual(deleteRequest.id);
  });
});
