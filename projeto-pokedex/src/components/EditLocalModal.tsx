import * as Dialog from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"

const EditLocalModal = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
    alert(`Local ${data["name"]} successfully edited.`)
  }

  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-[24rem] shadow-lg shadow-black/25">
          <Dialog.Title className="bg-red-500 rounded-md py-2 text-2xl text-center font-extrabold mb-10">
            EDIT THE LOCAL
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="flex flex-col gap-2">
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
                  DESCRIPTION
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("description")}
                />
              </div>
            </div>

            <button className="bg-red-500 text-base font-bold rounded-md p-3 text-white hover:bg-red-700 shadow-md shadow-black/25 absolute right-0">
              EDIT
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}

export default EditLocalModal
