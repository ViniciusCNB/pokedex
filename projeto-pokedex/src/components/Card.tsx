import { lazy, useState, Suspense } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { PokemonProps } from "../types"

interface CardProps {
  pokemon: PokemonProps
}

const LazyInfoModal = lazy(() => import("./InfoModal"))

const Card = (props: CardProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="p-3 rounded-lg h-[120px] grid grid-cols-2 shadow-lg shadow-black/15 bg-gradient-to-r from-blue-300/40 to-blue-600/40 hover:bg-blue-300 items-center justify-center">
        <img src={props.pokemon.imageurl} alt="" className="w-[100px] m-auto" />
        <div className="flex flex-col">
          <p className="text-black/80 text-[16px] font-bold">
            {props.pokemon.name.toUpperCase()}
          </p>
          <p className="text-black/70 text-[10px] font-bold">
            {props.pokemon.type.toUpperCase()}
          </p>
        </div>
      </Dialog.Trigger>
      {open && (
        <Suspense>
          <LazyInfoModal
            pokemon={props.pokemon}
            localId={props.pokemon.localid}
            trainerId={props.pokemon.trainerid}
          />
        </Suspense>
      )}
    </Dialog.Root>
  )
}

export default Card
