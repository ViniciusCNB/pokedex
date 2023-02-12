import { Description } from './description';
import { Pokemon } from './pokemon';

export interface LocalProps {
  name: string;
  description: Description;
  localPokemon: Pokemon;
}

export class Local {
  private props: LocalProps;

  constructor(props: LocalProps) {
    this.props = props;
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

  public set localPokemon(localPokemon: Pokemon) {
    this.props.localPokemon = localPokemon;
  }

  public get localPokemon(): Pokemon {
    return this.props.localPokemon;
  }
}
