import * as Dialog from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"

const AddTrainerModal = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
    alert(`Trainer ${data["name"]} successfully created.`)
  }

  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] shadow-lg shadow-black/25">
          <Dialog.Title className="text-4xl text-center font-bold mb-10">
            Add a Trainer
          </Dialog.Title>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col mb-5">
              <label htmlFor="" className="font-bold text-[16px]">
                NAME
              </label>
              <input
                type="text"
                className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                {...register("name")}
              />
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="" className="font-bold text-[16px]">
                GENDER
              </label>
              <select
                {...register("gender")}
                className="bg-gray-200 text-black py-3 px-4 rounded shadow-xl"
              >
                <option value=""></option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="" className="font-bold text-[16px]">
                AGE
              </label>
              <input
                type="text"
                className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                {...register("age")}
              />
            </div>

            <button className="bg-red-500 text-base font-bold rounded-md p-3 text-white">
              ADD
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}

export default AddTrainerModal
