import { Replace } from '@helpers/Replace';
import { randomUUID } from 'node:crypto';
import { Weight } from './weight';

export interface PokemonProps {
  trainerId: string;
  localId: string;
  imageURL: string;
  name: string;
  nickname: string;
  type: string;
  gender: string;
  weight: Weight;
  createdAt: Date | null;
}

export class Pokemon {
  private props: PokemonProps;
  private _id;

  constructor(props: Replace<PokemonProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    this._id = randomUUID();
  }

  public get id() {
    return this._id;
  }

  public set trainerId(trainerId: string) {
    this.props.trainerId = trainerId;
  }

  public get trainerId() {
    return this.props.trainerId;
  }

  public set localId(localId: string) {
    this.props.localId = localId;
  }

  public get localId() {
    return this.props.localId;
  }

  public set imageURL(imageURL: string) {
    this.props.imageURL = imageURL;
  }

  public get imageURL() {
    return this.props.imageURL;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set nickname(nickname: string) {
    this.props.nickname = nickname;
  }

  public get nickname(): string {
    return this.props.nickname;
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
