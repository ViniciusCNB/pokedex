
export interface BattleProps {
  id: string
  localid: string
  trainerid1: string
  trainerid2: string
  pokemonid1: string
  pokemonid2: string
  winnerid: string
  localname: string
  trainername1: string
  trainername2: string
  pokemonname1: string
  pokemonname2: string
  pokemonnickname1: string
  pokemonnickname2: string
}

export interface BattleInfos {
  id?: string
  result?: string
  enemyPoke?: string
  enemyTrainer?: string
  local?: string
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