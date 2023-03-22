
export interface BattleProps {
  id: string
  localid: string
  trainerId1: string
  trainerId2: string
  pokemonId1: string
  pokemonId2: string
  winnerId: string
}

export interface BattleInfos {
  result: string
  enemyPoke: string
  enemyTrainer: string
  local: string
}

export interface TrainerProps {
  id: string
  localId: string
  name: string
  age: number
}


export interface LocalProps {
  id: string;
  name: string;
  description: string
}

export interface PokemonProps {
  id: string
  trainerid: string
  localid: string
  imageurl: string
  name: string
  nickname: string
  type: string
  gender: string
  weight: string
  createdat: string
}