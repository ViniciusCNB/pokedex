import { randomUUID } from 'node:crypto';
import { Age } from './age';

export interface TrainerProps {
  localId: string;
  name: string;
  age: Age;
}

export class Trainer {
  private props: TrainerProps;
  private _id: string;

  constructor(props: TrainerProps) {
    this.props = props;
    this._id = randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public set localId(localId: string) {
    this.props.localId = localId;
  }

  public get localId(): string {
    return this.props.localId;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set age(age: Age) {
    this.props.age = age;
  }

  public get age(): Age {
    return this.props.age;
  }
}
