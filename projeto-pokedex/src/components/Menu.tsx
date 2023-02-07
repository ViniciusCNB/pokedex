import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
import AddModal from "./AddModal"

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="mb-5 bg-white/75 rounded-lg py-5 px-3 shadow-lg shadow-black/15 flex justify-between">
        <input placeholder="Pokémon's Name" type="text" className="bg-gray-200 rounded py-3 px-4" />
        
          <Dialog.Trigger className="bg-red-500 text-base font-semibold rounded-md p-3 text-white flex">
            ADD
          </Dialog.Trigger>
          
          <AddModal />
      </div>
    </Dialog.Root>
  )
}

export default Menu
