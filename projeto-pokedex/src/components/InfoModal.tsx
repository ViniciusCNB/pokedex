import * as Dialog from "@radix-ui/react-dialog"
import * as Tabs from "@radix-ui/react-tabs"
import axios from "axios"
import { useState, useEffect } from "react"
import ConfirmDeleteModal from "./ConfirmDeleteModal"

interface InfoModalProps {
  image: string
  name: string
  url: string
}

interface Pokemon {
  weight: number
  types: {
    0: {
      type: {
        name: string
      }
    }
  }
  sprites: {
    front_default: string
  }
}

const InfoModal = (props: InfoModalProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>()

  useEffect(() => {
    axios(props.url).then((response) => setPokemon(response.data))
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[50rem] h-[28rem] shadow-lg shadow-black/25">
        <Dialog.Title className="bg-red-500 rounded-md py-2 text-2xl text-center font-extrabold mb-10 shadow-md shadow-black/25">
          POKÉMON'S INFO
        </Dialog.Title>

        <div className="grid grid-cols-2 h-[16rem]">
          <img
            src={pokemon?.sprites.front_default}
            alt=""
            className="w-60 bg-slate-200/80 rounded-lg shadow-md shadow-black/25"
          />

          <Tabs.Root defaultValue="pokemon">
            <Tabs.List className="mb-3 flex justify-between">
              <Tabs.Trigger
                className="bg-red-500 px-3 py-2 flex-1 uppercase font-bold text-xs hover:bg-red-700 data-[state=active]:bg-red-700 rounded-l border-r-[1px] border-red-700 border-opacity-40"
                value="pokemon"
              >
                Pokémon
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-red-500 px-3 py-2 flex-1 uppercase font-bold text-xs hover:bg-red-700 data-[state=active]:bg-red-700 border-r-[1px] border-red-700 border-opacity-40"
                value="local"
              >
                Local
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-red-500 px-3 py-2 flex-1 uppercase font-bold text-xs hover:bg-red-700 data-[state=active]:bg-red-700 border-r-[1px] border-red-700 border-opacity-40"
                value="trainer"
              >
                Trainer
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-red-500 px-3 py-2 flex-1 uppercase font-bold text-xs hover:bg-red-700 data-[state=active]:bg-red-700 rounded-r"
                value="battle"
              >
                Battles
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="grid grid-cols-2 gap-2" value="pokemon">
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">NAME</p>
                <p className="text-sm font-semibold">
                  {props.name.toUpperCase()}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">NICKNAME</p>
                <p className="text-sm font-semibold">TEST NICKNAME</p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">TYPE</p>
                <p className="text-sm font-semibold">
                  {pokemon?.types[0].type.name.toUpperCase()}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">WEIGHT</p>
                <p className="text-sm font-semibold">{pokemon?.weight}</p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">GENDER</p>
                <p className="text-sm font-semibold">MALE</p>
              </div>
            </Tabs.Content>

            <Tabs.Content className="grid grid-cols-2 gap-2" value="local">
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">CAPTURE LOCAL</p>
                <p className="text-sm font-semibold">CITY</p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">CAPTURE DATE</p>
                <p className="text-sm font-semibold">05/03/2023</p>
              </div>
            </Tabs.Content>

            <Tabs.Content className="grid grid-cols-2 gap-2" value="trainer">
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">TRAINER</p>
                <p className="text-sm font-semibold">TEST NAME</p>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <Dialog.Root>
          <Dialog.Trigger className="rounded bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs">
            DELETE
          </Dialog.Trigger>
          <ConfirmDeleteModal />
        </Dialog.Root>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export default InfoModal
