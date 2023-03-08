import * as Dialog from "@radix-ui/react-dialog"
import bulbasaur from "../assets/bulbasaur.png"
import pikachu from "../assets/pikachu.png"
import interrog from "../assets/interrog.png"
import pokebola from "../assets/pokebola.png"

import { useForm } from "react-hook-form"

const CreateBattleModal = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
  }

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
            className="flex flex-col items-center relative"
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
                    POKÉMON 1
                  </label>
                  <select
                    {...register("pokémon-1")}
                    className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
                  >
                    <option value=""></option>
                  </select>
                </div>
                <div className="flex flex-col mb-5 w-60">
                  <label htmlFor="" className="font-bold text-[16px]">
                    TRAINER 1
                  </label>
                  <select
                    {...register("trainer-1")}
                    className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
                  >
                    <option value=""></option>
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
                    POKÉMON 2
                  </label>
                  <select
                    {...register("pokémon-2")}
                    className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
                  >
                    <option value=""></option>
                  </select>
                </div>
                <div className="flex flex-col mb-5 w-60">
                  <label htmlFor="" className="font-bold text-[16px]">
                    TRAINER 2
                  </label>
                  <select
                    {...register("trainer-2")}
                    className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
                  >
                    <option value=""></option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-5 w-60">
              <label htmlFor="" className="font-bold text-[16px]">
                BATTLE LOCAL
              </label>
              <select
                {...register("battle-local")}
                className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
              >
                <option value=""></option>
              </select>
            </div>
            <button className="bg-red-500 text-base font-bold rounded-md p-3 text-white hover:bg-red-700 shadow-md shadow-black/25 absolute right-0 bottom-5">
              CREATE
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}

export default CreateBattleModal
