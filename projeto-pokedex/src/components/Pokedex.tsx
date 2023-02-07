import Card from "./Card"
import bulbasaur from "../assets/bulbasaur.png"
import charmander from "../assets/charmander.png"
import pikachu from "../assets/pikachu.png"
import squirtle from "../assets/squirtle.png"
import Menu from "./Menu"

const Pokedex = () => {
  return (
    <div className="bg-red-600 w-1/2 mx-auto h-4/6 my-7 rounded-[50px] py-12 shadow-md shadow-black/60">
      <div className="bg-slate-100 w-11/12 max-h-[550px] mx-auto p-5 overflow-auto rounded-lg scrollbar scrollbar-thin-rose-500">
        <Menu />
        <div className="grid grid-cols-2 gap-4">
          <Card image={bulbasaur} name="Bulbasaur" type="Poison, Grass" />
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
          <Card image={pikachu} name="Pikachu" type="Electric" />
        </div>
      </div>
    </div>
  )
}

export default Pokedex
