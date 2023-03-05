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
      winnerId: '2',
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
    expect(battle.winnerId).toEqual('2');
  });

  it('should be able to add a new localId', () => {
    battle.localId = '12';
    expect(battle.localId).toEqual('12');
  });

  it('should be able to add a new trainerId1', () => {
    battle.trainerId1 = '13';
    battle.winnerId = '13';
    expect(battle.trainerId1).toEqual('13');
  });

  it('should be able to add a new trainerId2', () => {
    battle.trainerId2 = '14';
    expect(battle.trainerId2).toEqual('14');
  });

  it('should be able to add a new pokemonId1', () => {
    battle.pokemonId1 = '15';
    expect(battle.pokemonId1).toEqual('15');
  });

  it('should be able to add a new pokemonId2', () => {
    battle.pokemonId2 = '16';
    expect(battle.pokemonId2).toEqual('16');
  });

  it('should be able to add a new winnerId', () => {
    battle.winnerId = '14';
    expect(battle.winnerId).toEqual('14');
  });

  it('should not be able to create a trainerId1 equal to trainerId2', () => {
    battle.trainerId1 = battle.trainerId2;
    expect(() => new Battle(battle)).toThrowError();
  });

  it('should not be able to create a pokemonId1 equal to pokemonId2', () => {
    battle.pokemonId1 = battle.pokemonId2;
    expect(() => new Battle(battle)).toThrowError();
  });

  it('should note be able to create a winnerId other than trainerId1 and trainerId2', () => {
    battle.winnerId = '15';
    expect(() => new Battle(battle)).toThrowError();
  });
});
