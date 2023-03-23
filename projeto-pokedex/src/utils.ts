import { BattleProps } from "./types"

export const formatDate = (date: string) => {
  let str = date.split("T")
  return str[0]
}

export const checkPokemon = (battle?: BattleProps, pokeId?: string) => {
  if (battle?.pokemonid1 === pokeId) return true
  else return false
}

export const isWinner = (battle?: BattleProps, pokeId?: string) => {
  if (battle?.winnerid === pokeId) return true
  else return false
}

export const trataTipo = (res: any) => {
  let types: string[] = []
  res.map((type: any) => {
    types.push(type.type.name)
  })
  const stringTypes = types.join(", ")
  return stringTypes
}
