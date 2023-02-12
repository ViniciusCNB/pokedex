import { Weight } from './weight';

describe('Pokemon weight', () => {
  it('should be able to create a pokemon weight', () => {
    const weight = new Weight(1);

    expect(weight).toBeTruthy();
  });

  it('should not be able to create pokemon weight with value less than 1', () => {
    expect(() => new Weight(0)).toThrow();
  });

  it('should not be able to create pokemon weight with value more than 1000', () => {
    expect(() => new Weight(1001)).toThrow();
  });
});
