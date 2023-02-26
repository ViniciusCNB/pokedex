import { Replace } from '@helpers/Replace';
import { randomUUID } from 'node:crypto';
import { Weight } from './weight';

export interface PokemonProps {
  name: string;
  type: string;
  gender: string;
  weight: Weight;
  createdAt: Date | null;
}

export class Pokemon {
  private _id: string;
  private props: PokemonProps;

  constructor(props: Replace<PokemonProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set type(type: string) {
    this.props.type = type;
  }

  public get type(): string {
    return this.props.type;
  }

  public set gender(gender: string) {
    this.props.gender = gender;
  }

  public get gender(): string {
    return this.props.gender;
  }

  public set weight(weight: Weight) {
    this.props.weight = weight;
  }

  public get weight(): Weight {
    return this.props.weight;
  }

  public get createdAt(): Date | null {
    return this.props.createdAt;
  }
}
