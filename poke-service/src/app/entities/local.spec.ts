import { Description } from './description';
import { Local } from './local';
import { Pokemon } from './pokemon';
import { Weight } from './weight';

describe('Local', () => {
  let local: Local;

  beforeEach(() => {
    local = new Local({
      name: 'Pallet Town',
      description: new Description(
        'A quiet town where many trainers start their journey.',
      ),
      localPokemon: new Pokemon({
        name: 'Charmander',
        type: 'Fire',
        gender: 'Male',
        weight: new Weight(46),
      }),
    });
  });

  it('should be able to create a Local', () => {
    expect(local).toBeTruthy();
  });

  it('should have a name', () => {
    expect(local.name).toEqual('Pallet Town');
  });

  it('should be able to set a new name', () => {
    local.name = 'Viridian City';
    expect(local.name).toEqual('Viridian City');
  });

  it('should have a description', () => {
    expect(local.description).toBeInstanceOf(Description);
    expect(local.description.value).toEqual(
      'A quiet town where many trainers start their journey.',
    );
  });

  it('should be able to set a new description', () => {
    const newDescription = new Description('A bustling city.');
    local.description = newDescription;
    expect(local.description).toBeInstanceOf(Description);
    expect(local.description.value).toEqual('A bustling city.');
  });

  it('should have a local pokemon', () => {
    expect(local.localPokemon).toBeInstanceOf(Pokemon);
    expect(local.localPokemon.name).toEqual('Charmander');
    expect(local.localPokemon.type).toEqual('Fire');
    expect(local.localPokemon.gender).toEqual('Male');
    expect(local.localPokemon.weight).toBeInstanceOf(Weight);
    expect(local.localPokemon.weight.value).toEqual(46);
  });

  it('should be able to set a new local pokemon', () => {
    const newPokemon = new Pokemon({
      name: 'Squirtle',
      type: 'Water',
      gender: 'Male',
      weight: new Weight(44),
    });
    local.localPokemon = newPokemon;
    expect(local.localPokemon).toBeInstanceOf(Pokemon);
    expect(local.localPokemon.name).toEqual('Squirtle');
    expect(local.localPokemon.type).toEqual('Water');
    expect(local.localPokemon.gender).toEqual('Male');
    expect(local.localPokemon.weight).toBeInstanceOf(Weight);
    expect(local.localPokemon.weight.value).toEqual(44);
  });
});
