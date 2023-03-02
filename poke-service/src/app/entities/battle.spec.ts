import { Battle, BattleProps } from './battle';

describe('Battle', () => {
  let battle: BattleProps;

  beforeEach(() => {
    battle = new Battle({
      localId: '1',
      trainerId1: '2',
      trainerId2: '3',
      pokemonId1: '4',
      pokemonId2: '5',
      winnerId: '6',
    });
  });

  it('should be able to create a battle', () => {
    expect(battle).toBeTruthy();
  });

  it('should have a localId', () => {
    expect(battle.localId).toEqual('1');
  });

  it('should have a trainerId1', () => {
    expect(battle.trainerId1).toEqual('2');
  });

  it('should have a trainerId2', () => {
    expect(battle.trainerId2).toEqual('3');
  });

  it('should have a pokemonId1', () => {
    expect(battle.pokemonId1).toEqual('4');
  });

  it('should have a pokemonId2', () => {
    expect(battle.pokemonId2).toEqual('5');
  });

  it('should have a winnerId', () => {
    expect(battle.winnerId).toEqual('6');
  });

  it('should be able to add a new localId', () => {
    battle.localId = '12';
    expect(battle.localId).toEqual('12');
  });

  it('should be able to add a new trainerId1', () => {
    battle.trainerId1 = '12';
    expect(battle.trainerId1).toEqual('12');
  });

  it('should be able to add a new trainerId2', () => {
    battle.trainerId2 = '12';
    expect(battle.trainerId2).toEqual('12');
  });

  it('should be able to add a new pokemonId1', () => {
    battle.pokemonId1 = '12';
    expect(battle.pokemonId1).toEqual('12');
  });

  it('should be able to add a new pokemonId2', () => {
    battle.pokemonId2 = '12';
    expect(battle.pokemonId2).toEqual('12');
  });

  it('should be able to add a new winnerId', () => {
    battle.winnerId = '12';
    expect(battle.winnerId).toEqual('12');
  });
});
