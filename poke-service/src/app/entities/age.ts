export class Age {
  private readonly age: number;

  public get value() {
    return this.age;
  }

  private validateAgeValue(age: number) {
    return age >= 1 || age <= 100;
  }

  constructor(age: number) {
    const isAgeValueValid = this.validateAgeValue(age);

    if (!isAgeValueValid) {
      throw new Error('Age value error!');
    }

    this.age = age;
  }
}
