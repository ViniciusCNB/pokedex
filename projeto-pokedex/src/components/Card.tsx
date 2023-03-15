import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
import InfoModal from "./InfoModal"
import { PokemonProps } from "./Pokedex"

interface CardProps {
  pokemon: PokemonProps
}

const Card = (props: CardProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="p-3 rounded-lg h-[120px] grid grid-cols-2 shadow-lg shadow-black/15 bg-gradient-to-r from-blue-300/40 to-blue-600/40 hover:bg-blue-300 items-center justify-center">
        <img src={props.pokemon.imageurl} alt="" className="w-[100px] m-auto" />
        <p className="text-black/80 text-[16px] font-bold">
          {props.pokemon.name.toUpperCase()}
        </p>
      </Dialog.Trigger>

      <InfoModal pokemonId={props.pokemon.id} />
    </Dialog.Root>
  )
}

export default Card
