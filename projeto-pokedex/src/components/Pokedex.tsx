import { useEffect, useState } from "react"
import Card from "./Card"
import bulbasaur from "../assets/bulbasaur.png"
import charmander from "../assets/charmander.png"
import pikachu from "../assets/pikachu.png"
import squirtle from "../assets/squirtle.png"
import PokedexMenu from "./PokedexMenu"
import axios from "axios"

interface Pokemon {
  name: string,
  url: string
}

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>()
  const [filterText, setFilterText] = useState("")

  const handleFilterText = (text: string) => {
    setFilterText(text)
  }

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon").then((response) =>
      setPokemons(response.data["results"])
    )
  }, [])

  return (
    <div className="bg-red-600 w-1/2 mx-auto h-4/6 my-7 rounded-[50px] py-12 shadow-md shadow-black/60">
      <div className="bg-slate-100 w-11/12 h-[550px] mx-auto p-5 overflow-auto rounded-lg scrollbar scrollbar-thin-rose-500">
        <PokedexMenu handleFilterText={handleFilterText} />
        <div className="grid grid-cols-2 gap-4">
          {pokemons
            ?.filter((pokemon) => {
              return filterText.toLowerCase() === ""
                ? pokemon
                : pokemon.name.toLowerCase().includes(filterText)
            })
            .map((pokemon) => {
              return (
                <Card
                  key={pokemon.url}
                  image={bulbasaur}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              )
            })}
          {/* <Card image={bulbasaur} name="Bulbasaur" type="Poison, Grass" />
          <Card image={charmander} name="Charmander" type="Fire" />
          <Card image={squirtle} name="Squirtle" type="Water" />
          <Card image={pikachu} name="Pikachu" type="Electric" />
          <Card image={bulbasaur} name="Bulbasaur" type="Poison, Grass" />
          <Card image={charmander} name="Charmander" type="Fire" />
          <Card image={squirtle} name="Squirtle" type="Water" />
          <Card image={pikachu} name="Pikachu" type="Electric" />
          <Card image={bulbasaur} name="Bulbasaur" type="Poison, Grass" />
          <Card image={charmander} name="Charmander" type="Fire" />
          <Card image={squirtle} name="Squirtle" type="Water" />
          <Card image={pikachu} name="Pikachu" type="Electric" /> */}
        </div>
      </div>
    </div>
  )
}

export default Pokedex
