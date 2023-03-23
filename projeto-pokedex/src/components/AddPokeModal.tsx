import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { TrainerProps } from "../types"
import { trataTipo } from "../utils"
import { LocalProps } from "../types"

const AddPokeModal = () => {
  const { register, handleSubmit, reset } = useForm()
  const [locals, setLocals] = useState<LocalProps[]>([])
  const [trainers, setTrainers] = useState<TrainerProps[]>([])

  const onSubmit = (data: any) => {
    try {
      axios(
        `https://pokeapi.co/api/v2/pokemon/${data.name.toLowerCase()}`
      )
      .then((response) => {
        const pokeData = {
          ...data,
          imageURL: response["data"]["sprites"]["front_default"],
          type: trataTipo(response["data"]["types"]),
        }
        axios
          .post("http://localhost:3000/pokemon/create", pokeData)
          .then((response) => response.data)
          .then((data) => alert(`Pokémon ${data.name} successfully created.`))
          .then(() => window.location.reload())
      })
    } catch (error) {
      throw new Error(`Back-end response Created Trainer error!\n${error}`)
    } finally {
      reset()
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/local/find-all")
      .then((response) => response.data)
      .then((data) => setLocals(data.locals))
  }, [])

  useEffect(() => {
    axios
      .get("http://localhost:3000/trainer/find-all")
      .then((response) => response.data)
      .then((data) => setTrainers(data.trainers))
  }, [locals])

  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-[30rem] shadow-lg shadow-black/25">
          <Dialog.Title className="bg-red-500 rounded-md py-2 text-2xl text-center font-extrabold mb-10">
            ADD A POKÉMON
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  NAME
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("name", { required: true })}
                />
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  NICKNAME
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("nickname", { required: true })}
                />
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  WEIGHT
                </label>
                <input
                  type="number"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("weight", { required: true })}
                />
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  GENDER
                </label>
                <select
                  {...register("gender", { required: true })}
                  className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  TRAINER
                </label>
                <select
                  {...register("trainerId", { required: true })}
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

              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  CAPTURE LOCAL
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
            </div>

            <button className="bg-red-500 text-base font-bold rounded-md p-3 text-white hover:bg-red-700 shadow-md shadow-black/25 absolute right-0">
              ADD
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}

export default AddPokeModal
