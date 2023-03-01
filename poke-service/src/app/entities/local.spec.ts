import { Description } from './description';
import { Local } from './local';

describe('Local', () => {
  let local: Local;

  beforeEach(() => {
    local = new Local({
      name: 'Pallet Town',
      description: new Description(
        'A quiet town where many trainers start their journey.',
      ),
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
});
