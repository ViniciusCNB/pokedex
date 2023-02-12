export class Weight {
  private readonly weight: number;

  public get value(): number {
    return this.weight;
  }

  private validateWeightValue(weight: number): boolean {
    return weight > 0 && weight <= 1000;
  }

  constructor(weight: number) {
    const isWeightValueValid = this.validateWeightValue(weight);

    if (!isWeightValueValid) {
      throw new Error('Weight value error.');
    }

    this.weight = weight;
  }
}
