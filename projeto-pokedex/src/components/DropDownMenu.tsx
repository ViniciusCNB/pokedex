import * as Dialog from "@radix-ui/react-dialog"
import AddLocalModal from "./AddLocalModal"
import AddPokeModal from "./AddPokeModal"
import AddTrainerModal from "./AddTrainerModal"
import CreateBattleModal from "./CreateBattleModal"

const DropDownMenu = () => {
  return (
    <div className="w-[7.6rem] absolute bg-red-500 rounded-xl mt-2">
      <div>
        <Dialog.Root>
          <Dialog.Trigger className="w-full font-bold text-sm rounded-t-xl p-2 text-white flex hover:bg-red-700 border-b-[1px] border-red-700 border-opacity-40">
            ADD POKÉMON
          </Dialog.Trigger>
          <AddPokeModal />
        </Dialog.Root>
      </div>

      <div>
        <Dialog.Root>
          <Dialog.Trigger className="w-full font-bold text-sm p-2 text-white flex hover:bg-red-700 border-b-[1px] border-red-700 border-opacity-40">
            ADD LOCAL
          </Dialog.Trigger>
          <AddLocalModal />
        </Dialog.Root>
      </div>

      <div>
        <Dialog.Root>
          <Dialog.Trigger className="w-full font-bold text-sm p-2 text-white flex hover:bg-red-700 border-b-[1px] border-red-700 border-opacity-40">
            ADD TRAINER
          </Dialog.Trigger>
          <AddTrainerModal />
        </Dialog.Root>
      </div>

      <div>
        <Dialog.Root>
          <Dialog.Trigger className="w-full font-bold text-sm rounded-b-xl p-2 text-white flex hover:bg-red-700">
            CREATE BATTLE
          </Dialog.Trigger>
          <CreateBattleModal />
        </Dialog.Root>
      </div>
    </div>
  )
}

export default DropDownMenu
