import * as Dialog from "@radix-ui/react-dialog"
import AddLocalModal from "./AddLocalModal"
import AddPokeModal from "./AddPokeModal"
import AddTrainerModal from "./AddTrainerModal"

const DropDownMenu = () => {

  return (
      <div className="w-[7.6rem] absolute bg-red-500 rounded-xl mt-2">
        <div className="font-bold text-sm rounded-t-xl p-2 text-white flex hover:bg-red-700">
          <Dialog.Root>
            <Dialog.Trigger>
              ADD POKÉMON
            </Dialog.Trigger>
            <AddPokeModal />
          </Dialog.Root>
        </div>

        <div className="font-bold text-sm p-2 text-white flex hover:bg-red-700 mx-auto">
          <Dialog.Root>
            <Dialog.Trigger className="">
              ADD LOCAL
            </Dialog.Trigger>
            <AddLocalModal />
          </Dialog.Root>
        </div>

        <div className="font-bold text-sm rounded-b-xl p-2 text-white flex hover:bg-red-700">
          <Dialog.Root>
            <Dialog.Trigger>
              ADD TRAINER
            </Dialog.Trigger>
            <AddTrainerModal />
          </Dialog.Root>   
        </div>

    </div>
  )
}

export default DropDownMenu
