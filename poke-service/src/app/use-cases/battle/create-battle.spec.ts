import { InMemoryBattlesRepository } from '../../../../test/repositories/in-memory-battles-repository';
import { Battle } from '../../../app/entities/battle';
import { CreateBattle } from './create-battle';

describe('CreateBattle', () => {
  it('should be able to create a battle', async () => {
    const battlesRepository = new InMemoryBattlesRepository();
    const createBattle = new CreateBattle(battlesRepository);

    const request = {
      localId: '1',
      trainerId1: '2',
      trainerId2: '3',
      pokemonId1: '4',
      pokemonId2: '5',
      winnerId: '5',
    };

    const { battle } = await createBattle.execute(request);

    expect(battle).toBeTruthy();
    expect(battle).toBeInstanceOf(Battle);
    expect(battlesRepository.battles).toHaveLength(1);
    expect(battlesRepository.battles[0]).toEqual(battle);
    expect(request.localId).toEqual(battle.localId);
    expect(request.trainerId1).toEqual(battle.trainerId1);
    expect(request.trainerId2).toEqual(battle.trainerId2);
    expect(request.pokemonId1).toEqual(battle.pokemonId1);
    expect(request.pokemonId2).toEqual(battle.pokemonId2);
    expect(request.winnerId).toEqual(battle.winnerId);
    expect(request.winnerId).toEqual(battle.pokemonId2);
  });
});
