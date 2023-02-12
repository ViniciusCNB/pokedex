import { Description } from './description';

describe('Local Description', () => {
  it('should be able to create a local description', () => {
    const description = new Description(
      'Its a little description about the local',
    );

    expect(description).toBeTruthy();
  });

  it('should not be able to create a local description with less than 5 characters', () => {
    expect(() => new Description('abc')).toThrow();
  });

  it('should not be able to create a local description with more than 250 characters', () => {
    expect(() => new Description('a'.repeat(251))).toThrow();
  });
});
