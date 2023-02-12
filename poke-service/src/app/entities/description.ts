export class Description {
  private readonly description: string;

  public get value(): string {
    return this.description;
  }

  private validateDescriptionLength(description: string): boolean {
    return description.length >= 5 && description.length <= 250;
  }

  constructor(description: string) {
    const isDescriptionLengthValid =
      this.validateDescriptionLength(description);

    if (!isDescriptionLengthValid) {
      throw new Error('Description length error.');
    }

    this.description = description; //.
  }
}
