import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import pokebola from "../assets/pokebola.png"
import { useForm } from "react-hook-form"
import axios from "axios"
import { TrainerProps, PokemonProps, LocalProps } from "../types"

const CreateBattleModal = () => {
  const [trainers, setTrainers] = useState<TrainerProps[]>([])
  const [pokemons1, setPokemons1] = useState<PokemonProps[]>([])
  const [pokemons2, setPokemons2] = useState<PokemonProps[]>([])
  const [locals, setLocals] = useState<LocalProps[]>([])
  const { register, handleSubmit, reset, watch } = useForm()

  const onSubmit = async (data: any) => {
    console.log(data)
    if (data.trainerId1 === data.trainerId2) {
      alert(`Battle with the same trainer! Check the provided informations.`)
      reset()
    } else {
      try {
        await axios
          .post("http://localhost:3000/battle/create", data)
          .then((response) => response.data)
        alert(`Battle successfully created.`)
      } catch (error) {
        throw new Error(`Back-end response Created Battle error!\n${error}`)
      } finally {
        reset()
      }
    }
  }

  const selectedTrainer1 = watch("trainerId1")
  const selectedTrainer2 = watch("trainerId2")

  const selectedPoke1 = watch("pokemonId1")
  const selectedPoke2 = watch("pokemonId2")

  const trainerId1 = { trainerId: selectedTrainer1 }
  const trainerId2 = { trainerId: selectedTrainer2 }

  useEffect(() => {
    axios
      .get("http://localhost:3000/trainer/find-all")
      .then((response) => response.data)
      .then((data) => setTrainers(data.trainers))
  }, [])

  useEffect(() => {
    axios
      .get("http://localhost:3000/pokemon/find-by-trainerId", {
        params: trainerId1,
      })
      .then((response) => setPokemons1(response.data.pokemons))
  }, [selectedTrainer1])

  useEffect(() => {
    axios
      .get("http://localhost:3000/pokemon/find-by-trainerId", {
        params: trainerId2,
      })
      .then((response) => setPokemons2(response.data.pokemons))
  }, [selectedTrainer2])

  useEffect(() => {
    axios
      .get("http://localhost:3000/local/find-all")
      .then((response) => response.data)
      .then((data) => setLocals(data.locals))
  }, [])

  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[45rem] h-[38rem] shadow-lg shadow-black/25">
          <Dialog.Title className="bg-red-500 rounded-md py-2 text-2xl text-center font-extrabold mb-8 shadow-md shadow-black/25">
            CREATE BATTLE
          </Dialog.Title>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center h-[470px] relative overflow-hidden scrollbar"
          >
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col items-center">
                <img
                  src={pokebola}
                  alt=""
                  className="w-48 p-8 bg-slate-200/80 rounded-lg shadow-md shadow-black/25 mb-5"
                />
                <div className="flex flex-col mb-5 w-60">
                  <label htmlFor="" className="font-bold text-[16px]">
                    TRAINER 1
                  </label>
                  <select
                    {...register("trainerId1", { required: true })}
                    className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
                  >
                    <option value=""></option>
                    {trainers.map((trainer) => (
                      <option key={trainer.id} value={trainer.id}>
                        {trainer.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mb-5 w-60">
                  <label htmlFor="" className="font-bold text-[16px]">
                    POKÉMON 1
                  </label>
                  <select
                    {...register("pokemonId1", { required: true })}
                    className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
                  >
                    <option value=""></option>
                    {pokemons1.map((pokemon) => (
                      <option key={pokemon.id} value={pokemon.id}>
                        {pokemon.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={pokebola}
                  alt=""
                  className="w-48 p-8 bg-slate-200/80 rounded-lg shadow-md shadow-black/25 mb-5"
                />
                <div className="flex flex-col mb-5 w-60">
                  <label htmlFor="" className="font-bold text-[16px]">
                    TRAINER 2
                  </label>
                  <select
                    {...register("trainerId2", { required: true })}
                    className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
                  >
                    <option value=""></option>
                    {trainers.map((trainer) => (
                      <option key={trainer.id} value={trainer.id}>
                        {trainer.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mb-5 w-60">
                  <label htmlFor="" className="font-bold text-[16px]">
                    POKÉMON 2
                  </label>
                  <select
                    {...register("pokemonId2", { required: true })}
                    className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
                  >
                    <option value=""></option>
                    {pokemons2.map((pokemon) => (
                      <option key={pokemon.id} value={pokemon.id}>
                        {pokemon.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-5 w-60">
              <label htmlFor="" className="font-bold text-[16px]">
                BATTLE LOCAL
              </label>
              <select
                {...register("localId", { required: true })}
                className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
              >
                <option value=""></option>
                {locals.map((local) => (
                  <option key={local.id} value={local.id}>
                    {local.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-5 w-60">
              <label htmlFor="" className="font-bold text-[16px]">
                WINNER
              </label>
              <select
                {...register("winnerId", { required: true })}
                className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
              >
                <option value=""></option>
                <option value={selectedPoke1}>Pokémon 1</option>
                <option value={selectedPoke2}>Pokémon 2</option>
              </select>
            </div>
            <button className="bg-red-500 text-base font-bold rounded-md p-3 text-white hover:bg-red-700 shadow-md shadow-black/25 absolute right-0 -bottom-28">
              CREATE
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}

export default CreateBattleModal
