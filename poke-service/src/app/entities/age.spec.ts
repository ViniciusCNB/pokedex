import { Age } from './age';

describe('Age', () => {
  let age: Age;

  beforeEach(() => {
    age = new Age(14);
  });

  it('should be able to create a age', () => {
    expect(age).toBeTruthy();
  });

  it('should have a new value to age', () => {
    age = new Age(31);
    expect(age).toBeInstanceOf(Age);
    expect(age.value).toEqual(31);
  });

  it('should not be able to create a age less than 1', () => {
    expect(() => new Age(0)).toThrow();
  });

  it('should not be able to create a age more than 100', () => {
    expect(() => new Age(101)).toThrow();
  });
});
