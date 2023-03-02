import { Age } from './age';
import { Trainer } from './trainer';

describe('Trainer', () => {
  let trainer: Trainer;

  beforeEach(() => {
    trainer = new Trainer({
      localId: '534534',
      name: 'Ash',
      age: new Age(15),
    });
  });

  it('should be able to create a Trainer', () => {
    expect(trainer).toBeTruthy();
  });

  it('should have a name', () => {
    expect(trainer.name).toEqual('Ash');
  });

  it('should have a localId', () => {
    expect(trainer.localId).toEqual('534534');
  });

  it('should have a age', () => {
    expect(trainer.age).toBeInstanceOf(Age);
    expect(trainer.age.value).toEqual(15);
  });

  it('should be able to set a new localId', () => {
    trainer.localId = '123';
    expect(trainer.localId).toEqual('123');
  });

  it('should be able to set a new name', () => {
    trainer.name = 'Broke';
    expect(trainer.name).toEqual('Broke');
  });

  it('should be able to set a new age instancy', () => {
    const newAge = new Age(22);
    trainer.age = newAge;
    expect(trainer.age).toBeInstanceOf(Age);
    expect(trainer.age.value).toEqual(22);
  });
});
