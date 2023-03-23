import * as Dialog from "@radix-ui/react-dialog"
import * as Tabs from "@radix-ui/react-tabs"
import axios from "axios"
import { Pencil, Trash } from "phosphor-react"
import { useEffect, useState, lazy, Suspense } from "react"
import { TrainerProps } from "../types"
import { LocalProps } from "../types"
import EditLocalModal from "./EditLocalModal"
import { PokemonProps } from "../types"
import { checkPokemon, formatDate, isWinner } from "../utils"
import { BattleInfos, BattleProps } from "../types"

const LazyConfirmDeleteModal = lazy(() => import("./ConfirmDeleteModal"))
const LazyEditLocalModal = lazy(() => import("./EditLocalModal"))

interface InfoModalProps {
  pokemon: PokemonProps
  localId: string
  trainerId: string
}

const InfoModal = (props: InfoModalProps) => {
  const [open, setOpen] = useState(false)
  const [local, setLocal] = useState<LocalProps>()
  const [trainer, setTrainer] = useState<TrainerProps>()
  const [battleInfos, setBattleInfos] = useState<BattleProps[]>()
  const [trainerLocal, setTrainerLocal] = useState<string>("")

  const locId = { id: props.localId }
  const trainId = { id: props.trainerId }
  const pokeId = { pokemonId: props.pokemon.id }
  const trainLocId = { id: trainer?.localId }

  useEffect(() => {
    axios
      .get("http://localhost:3000/local/find", { params: locId })
      .then((response) => setLocal(response.data))
    axios
      .get("http://localhost:3000/trainer/find", { params: trainId })
      .then((response) => setTrainer(response.data))
    axios
      .get("http://localhost:3000/battle/find", { params: pokeId })
      .then((response) => response.data)
      .then((data) => data.battles)
      .then((battles) => setBattleInfos(battles))
  }, [])

  const handleInformation = (battles: BattleProps[] | undefined) => {
    const ret = battles?.map((battle) => {
      const battleInfosRes: BattleInfos = {
        id: "",
        result: "",
        enemyPoke: "",
        enemyTrainer: "",
        local: "",
      }

      battleInfosRes.id = battle.id
      battleInfosRes.local = battle.localname

      isWinner(battle, props.pokemon.id)
        ? (battleInfosRes.result = "VICTORY")
        : (battleInfosRes.result = "DEFEAT")

      if (checkPokemon(battle, props.pokemon.id)) {
        battleInfosRes.enemyPoke = battle.pokemonname2
        battleInfosRes.enemyTrainer = battle.trainername2
      } else {
        battleInfosRes.enemyPoke = battle.pokemonname1
        battleInfosRes.enemyTrainer = battle.trainername1
      }

      return battleInfosRes
    })
    return ret
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/local/find", { params: trainLocId })
      .then((response) => setTrainerLocal(response.data.name))
  }, [trainer?.localId])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[50rem] h-[25rem] shadow-lg shadow-black/25">
        <Dialog.Title className="bg-red-500 rounded-md py-2 text-2xl text-center font-extrabold mb-10 shadow-md shadow-black/25">
          POKÉMON'S INFO
        </Dialog.Title>

        <div className="grid grid-cols-2 h-[16rem]">
          <img
            src={props.pokemon.imageurl}
            alt=""
            className="w-60 h-60 bg-slate-200/80 rounded-lg shadow-md shadow-black/25"
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
                <p className="text-sm font-medium">
                  {props.pokemon.name.toUpperCase()}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">NICKNAME</p>
                <p className="text-sm font-medium">
                  {props.pokemon.nickname.toUpperCase()}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">TYPE</p>
                <p className="text-sm font-medium">
                  {props.pokemon.type.toUpperCase()}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">WEIGHT</p>
                <p className="text-sm font-medium">{props.pokemon.weight}</p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">GENDER</p>
                <p className="text-sm font-medium">
                  {props.pokemon.gender.toUpperCase()}
                </p>
              </div>
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger
                  title="Delete Pokémon"
                  className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-10 bottom-10 shadow-sm shadow-black/25"
                >
                  <Trash size={17} weight="bold" />
                </Dialog.Trigger>
                {open && (
                  <Suspense>
                    <LazyConfirmDeleteModal
                      label="POKÉMON"
                      url="pokemon"
                      id={props.pokemon.id}
                    />
                  </Suspense>
                )}
              </Dialog.Root>
            </Tabs.Content>

            <Tabs.Content className="grid grid-cols-2 gap-2" value="local">
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">NAME</p>
                <p className="text-sm font-medium">
                  {local?.name.toUpperCase()}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">CAPTURE DATE</p>
                <p className="text-sm font-medium">
                  {formatDate(props.pokemon.createdat)}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">DESCRIPTION</p>
                <p className="text-sm font-medium">
                  {local?.description.toUpperCase()}
                </p>
              </div>
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger
                  title="Edit Local"
                  className="rounded-[50%] bg-slate-600 mt-3 py-2 px-3 text-white hover:bg-slate-800 font-bold text-xs absolute right-10 bottom-10 shadow-sm shadow-black/25"
                >
                  <Pencil size={17} weight="bold" />
                </Dialog.Trigger>
                {open && (
                  <Suspense>
                    <LazyEditLocalModal id={local?.id} />
                  </Suspense>
                )}
              </Dialog.Root>
            </Tabs.Content>

            <Tabs.Content className="grid grid-cols-2 gap-2" value="trainer">
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">NAME</p>
                <p className="text-sm font-medium">
                  {trainer?.name.toUpperCase()}
                </p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">AGE</p>
                <p className="text-sm font-medium">{trainer?.age}</p>
              </div>
              <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit">
                <p className="text-red-500 font-extrabold">LOCAL</p>
                <p className="text-sm font-medium">
                  {trainerLocal.toUpperCase()}
                </p>
              </div>
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger
                  title="Delete Trainer"
                  className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-10 bottom-10 shadow-sm shadow-black/25"
                >
                  <Trash size={17} weight="bold" />
                </Dialog.Trigger>
                {open && (
                  <Suspense>
                    <LazyConfirmDeleteModal
                      label="TRAINER"
                      url="trainer"
                      id={trainer?.id}
                    />
                  </Suspense>
                )}
              </Dialog.Root>
            </Tabs.Content>

            <Tabs.Content
              className="grid grid-cols-1 gap-2 h-[197px] overflow-hidden scrollbar"
              value="battle"
            >
              {handleInformation(battleInfos)?.map((battle) => (
                <div className="bg-slate-200/80 rounded-lg shadow-md shadow-black/25 text-black py-2 px-4 h-fit relative">
                  {battle.result == "VICTORY" ? (
                    <p className="text-green-500 font-extrabold">VICTORY</p>
                  ) : (
                    <p className="text-red-500 font-extrabold">DEFEAT</p>
                  )}
                  <p className="text-sm font-semibold">
                    <span className="font-bold">AGAINST:</span>{" "}
                    {battle.enemyPoke}
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="font-bold">OPPONENT TRAINER:</span>{" "}
                    {battle.enemyTrainer}
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="font-bold">LOCAL:</span> {battle.local}
                  </p>
                  <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger
                      title="Delete Battle"
                      className="rounded-[50%] bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs absolute right-3 bottom-9 shadow-sm shadow-black/25"
                    >
                      <Trash size={11} weight="bold" />
                    </Dialog.Trigger>
                    {open && (
                      <Suspense>
                        <LazyConfirmDeleteModal
                          label="BATTLE"
                          url="battle"
                          id={battle.id}
                        />
                      </Suspense>
                    )}
                  </Dialog.Root>
                </div>
              ))}
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export default InfoModal