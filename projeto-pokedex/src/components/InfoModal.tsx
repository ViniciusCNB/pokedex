import * as Dialog from "@radix-ui/react-dialog"
import * as Tabs from "@radix-ui/react-tabs"
import axios from "axios"
import { useState, useEffect } from "react"
import ConfirmDeleteModal from "./ConfirmDeleteModal"
import { Trash, Pencil } from "phosphor-react"
import EditLocalModal from "./EditLocalModal"
import { PokemonProps } from "./Pokedex"
import { LocalProps } from "./AddTrainerModal"
import { TrainerProps } from "./AddPokeModal"

interface InfoModalProps {
  pokemonId: string
}

const InfoModal = (props: InfoModalProps) => {
  const [local, setLocal] = useState<LocalProps>()
  const [trainer, setTrainer] = useState<TrainerProps>()
  console.log(props.pokemonId)
  const pokeId = { id: props.pokemonId }

  useEffect(() => {
    axios
      .get("http://localhost:3000/pokemon/find", { params: pokeId })
      .then((response) => console.log(response))
    // .then((data) => setLocal(data.locals))
  }, [])

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/trainer/find", { params: trainerId })
  //     .then((response) => console.log(response.data))
  //   // .then((data) => setLocal(data.locals))
  // }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[50rem] h-[25rem] shadow-lg shadow-black/25">
        <Dialog.Title className="bg-red-500 rounded-md py-2 text-2xl text-center font-extrabold mb-10 shadow-md shadow-black/25">
          POKÉMON'S INFO
        </Dialog.Title>

        <div className="grid grid-cols-2 h-[16rem]">
          <img
            // src={props.pokemon.imageurl}
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
                  {/* {props.pokemon.name.toUpperCase()} */}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">NICKNAME</p>
                <p className="text-sm font-semibold">
                  {/* {props.pokemon.nickname.toUpperCase()} */}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">TYPE</p>
                <p className="text-sm font-semibold">
                  {/* {props.pokemon.type.toUpperCase()} */}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">WEIGHT</p>
                {/* <p className="text-sm font-semibold">{props.pokemon.weight}</p> */}
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">GENDER</p>
                <p className="text-sm font-semibold">
                  {/* {props.pokemon.gender.toUpperCase()} */}
                </p>
              </div>
              <Dialog.Root>
                <Dialog.Trigger
                  title="Delete Pokémon"
                  className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-10 bottom-10 shadow-sm shadow-black/25"
                >
                  <Trash size={17} weight="bold" />
                </Dialog.Trigger>
                <ConfirmDeleteModal label="POKÉMON" />
              </Dialog.Root>
            </Tabs.Content>

            <Tabs.Content className="grid grid-cols-2 gap-2" value="local">
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">NAME</p>
                <p className="text-sm font-semibold">CITY</p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">CAPTURE DATE</p>
                <p className="text-sm font-semibold">08/03/2023</p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">DESCRIPTION</p>
                <p className="text-sm font-semibold">Area to catch pokémons.</p>
              </div>
              <Dialog.Root>
                <Dialog.Trigger
                  title="Edit Local"
                  className="rounded-[50%] bg-slate-600 mt-3 py-2 px-3 text-white hover:bg-slate-800 font-bold text-xs absolute right-10 bottom-10 shadow-sm shadow-black/25"
                >
                  <Pencil size={17} weight="bold" />
                </Dialog.Trigger>
                <EditLocalModal />
              </Dialog.Root>
            </Tabs.Content>

            <Tabs.Content className="grid grid-cols-2 gap-2" value="trainer">
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">NAME</p>
                <p className="text-sm font-semibold">TEST NAME</p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">AGE</p>
                <p className="text-sm font-semibold">20</p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">LOCAL</p>
                <p className="text-sm font-semibold">TEST LOCAL</p>
              </div>
              <Dialog.Root>
                <Dialog.Trigger
                  title="Delete Trainer"
                  className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-10 bottom-10 shadow-sm shadow-black/25"
                >
                  <Trash size={17} weight="bold" />
                </Dialog.Trigger>
                <ConfirmDeleteModal label="TRAINER" />
              </Dialog.Root>
            </Tabs.Content>

            <Tabs.Content
              className="grid grid-cols-1 gap-2 h-[197px] overflow-hidden scrollbar"
              value="battle"
            >
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit relative">
                <p className="text-green-500 font-extrabold">VICTORY</p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">AGAINST:</span> PIKACHU [ PIKAPIKA
                  ]
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">OPPONENT TRAINER:</span> BERNARDO
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">LOCAL:</span> CITY
                </p>
                <Dialog.Root>
                  <Dialog.Trigger
                    title="Delete Battle"
                    className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-3 bottom-9 shadow-sm shadow-black/25"
                  >
                    <Trash size={11} weight="bold" />
                  </Dialog.Trigger>
                  <ConfirmDeleteModal label="BATTLE" />
                </Dialog.Root>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit relative">
                <p className="text-green-500 font-extrabold">VICTORY</p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">AGAINST:</span> BULBASAUR [
                  BULBABULBA ]
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">OPPONENT TRAINER:</span> VINÍCIUS
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">LOCAL:</span> FOREST
                </p>
                <Dialog.Root>
                  <Dialog.Trigger
                    title="Delete Battle"
                    className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-3 bottom-9 shadow-sm shadow-black/25"
                  >
                    <Trash size={11} weight="bold" />
                  </Dialog.Trigger>
                  <ConfirmDeleteModal label="BATTLE" />
                </Dialog.Root>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit relative">
                <p className="text-red-500 font-extrabold">DEFEAT</p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">AGAINST:</span> CHARMANDER [
                  CHARCHAR ]
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">OPPONENT TRAINER:</span> BERNARDO
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">LOCAL:</span> FOREST
                </p>
                <Dialog.Root>
                  <Dialog.Trigger
                    title="Delete Battle"
                    className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-3 bottom-9 shadow-sm shadow-black/25"
                  >
                    <Trash size={11} weight="bold" />
                  </Dialog.Trigger>
                  <ConfirmDeleteModal label="BATTLE" />
                </Dialog.Root>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit relative">
                <p className="text-green-500 font-extrabold">VICTORY</p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">AGAINST:</span> METAPOD [ METAMETA
                  ]
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">OPPONENT TRAINER:</span> VINÍCIUS
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">LOCAL:</span> CITY
                </p>
                <Dialog.Root>
                  <Dialog.Trigger
                    title="Delete Battle"
                    className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-3 bottom-9 shadow-sm shadow-black/25"
                  >
                    <Trash size={11} weight="bold" />
                  </Dialog.Trigger>
                  <ConfirmDeleteModal label="BATTLE" />
                </Dialog.Root>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit relative">
                <p className="text-red-500 font-extrabold">DEFEAT</p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">AGAINST:</span> PIDGEY [ PIPI ]
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">OPPONENT TRAINER:</span> BERNARDO
                </p>
                <p className="text-sm font-semibold">
                  <span className="font-bold">LOCAL:</span> CITY
                </p>
                <Dialog.Root>
                  <Dialog.Trigger
                    title="Delete Battle"
                    className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-3 bottom-9 shadow-sm shadow-black/25"
                  >
                    <Trash size={11} weight="bold" />
                  </Dialog.Trigger>
                  <ConfirmDeleteModal label="BATTLE" />
                </Dialog.Root>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export default InfoModal
