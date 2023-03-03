import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { useState, useEffect } from "react"

interface InfoModalProps {
  image: string
  name: string
  url: string
}

interface Pokemon {
  sprites: {
    front_default: string
  }
}

const InfoModal = (props: InfoModalProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>()

  useEffect(() => {
    axios(props.url)
      .then(response => setPokemon(response.data))
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>

      <Dialog.Content className="fixed bg-slate-400/80 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg min-w-[50rem] w-[30rem] shadow-lg shadow-black/25">
        <Dialog.Title className="text-4xl text-center font-bold mb-10">Pokémon's Info</Dialog.Title>
        
        <div className="grid grid-cols-2">
          <div>
            <img src={pokemon?.sprites.front_default} alt="" className="w-60 bg-slate-200/80 rounded-lg" />
          </div>
          <div className="mx-10">
            <p>Name: {props.name}</p>
          </div>
        </div>
        
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export default InfoModal
