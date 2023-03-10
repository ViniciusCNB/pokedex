import { randomUUID } from 'node:crypto';

export interface BattleProps {
  localId: string;
  trainerId1: string;
  trainerId2: string;
  pokemonId1: string;
  pokemonId2: string;
  winnerId: string;
}

export class Battle {
  private props: BattleProps;
  private _id: string;

  private validateWinnersValue(
    pokemonId1: string,
    pokemonId2: string,
    winnerId: string,
  ) {
    return (
      pokemonId1 == pokemonId2 ||
      (winnerId != pokemonId1 && winnerId != pokemonId2)
    );
  }

  private validateTrainersValue(trainerId1: string, trainerId2: string) {
    return trainerId1 == trainerId2;
  }

  constructor(props: BattleProps) {
    const isNotWinnersValueValid = this.validateWinnersValue(
      props.pokemonId1,
      props.pokemonId2,
      props.winnerId,
    );

    const isNotTrainersValueValid = this.validateTrainersValue(
      props.trainerId1,
      props.trainerId2,
    );

    if (isNotWinnersValueValid || isNotTrainersValueValid) {
      throw new Error('Winners or Trainers or Pokemons value error!');
    }

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

  public set trainerId1(trainerId1: string) {
    this.props.trainerId1 = trainerId1;
  }

  public get trainerId1(): string {
    return this.props.trainerId1;
  }

  public set trainerId2(trainerId2: string) {
    this.props.trainerId2 = trainerId2;
  }

  public get trainerId2(): string {
    return this.props.trainerId2;
  }

  public set pokemonId1(pokemonId1: string) {
    this.props.pokemonId1 = pokemonId1;
  }

  public get pokemonId1(): string {
    return this.props.pokemonId1;
  }

  public set pokemonId2(pokemonId2: string) {
    this.props.pokemonId2 = pokemonId2;
  }

  public get pokemonId2(): string {
    return this.props.pokemonId2;
  }

  public set winnerId(winnerId: string) {
    this.props.winnerId = winnerId;
  }

  public get winnerId(): string {
    return this.props.winnerId;
  }
}
