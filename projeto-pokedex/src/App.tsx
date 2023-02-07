import React from "react"
import Pokedex from "./components/Pokedex"
import "./main.css"
import pokelogo from "./assets/pokemon-logo.png"

const App = () => {
  return (
    <div className="">
      <img src={pokelogo} alt="" className="w-1/3 mx-auto my-8" />
      <Pokedex />
    </div>
  )
}

export default App
