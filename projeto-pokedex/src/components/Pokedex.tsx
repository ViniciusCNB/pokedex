import { useEffect, useState } from "react"
import Card from "./Card"
import PokedexMenu from "./PokedexMenu"
import axios from "axios"
import { PokemonProps } from "../types"

const Pokedex = () => {
  const [filterText, setFilterText] = useState("")
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])

  const handleFilterText = (text: string) => {
    setFilterText(text)
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/pokemon/find-all")
      .then((response) => response.data)
      .then((data) => setPokemons(data.pokemons))
  }, [])

  return (
    <div className="bg-red-600 w-1/2 mx-auto h-4/6 my-7 rounded-[50px] py-12 shadow-md shadow-black/60">
      <div className="bg-slate-100 w-11/12 h-[550px] mx-auto p-5 rounded-lg">
        <PokedexMenu handleFilterText={handleFilterText} />
        <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-auto scrollbar scrollbar-thin-rose-500">
          {pokemons
            ?.filter((pokemon) => {
              return filterText.toLowerCase() === ""
                ? pokemon
                : pokemon.name.toLowerCase().includes(filterText)
            })
            .map((pokemon) => {
              return <Card key={pokemon.id} pokemon={pokemon} />
            })}
        </div>
      </div>
    </div>
  )
}

export default Pokedex
