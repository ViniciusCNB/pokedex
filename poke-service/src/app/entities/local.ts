import { randomUUID } from 'node:crypto';
import { Description } from './description';

export interface LocalProps {
  name: string;
  description: Description;
}

export class Local {
  private props: LocalProps;
  private _id: string;

  constructor(props: LocalProps) {
    this._id = randomUUID();
    this.props = props;
  }

  public get id(): string {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set description(description: Description) {
    this.props.description = description;
  }

  public get description(): Description {
    return this.props.description;
  }
}
