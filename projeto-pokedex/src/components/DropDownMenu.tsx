import { lazy, Suspense, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"

const LazyAddLocalModal = lazy(() => import("./AddLocalModal"))
const LazyAddPokeModal = lazy(() => import("./AddPokeModal"))
const LazyAddTrainerModal = lazy(() => import("./AddTrainerModal"))
const LazyCreateBattleModal = lazy(() => import("./CreateBattleModal"))

const DropDownMenu = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)

  return (
    <div className="w-[7.8rem] absolute bg-red-500 rounded-lg mt-2">
      <div>
        <Dialog.Root open={open1} onOpenChange={setOpen1}>
          <Dialog.Trigger className="w-full font-bold text-sm rounded-t-lg p-2 text-white flex hover:bg-red-700 border-b-[1px] border-red-700 border-opacity-40">
            ADD POKÉMON
          </Dialog.Trigger>
          {open1 && (
            <Suspense>
              <LazyAddPokeModal />
            </Suspense>
          )}
        </Dialog.Root>
      </div>

      <div>
        <Dialog.Root open={open2} onOpenChange={setOpen2}>
          <Dialog.Trigger className="w-full font-bold text-sm p-2 text-white flex hover:bg-red-700 border-b-[1px] border-red-700 border-opacity-40">
            ADD LOCAL
          </Dialog.Trigger>
          {open2 && (
            <Suspense>
              <LazyAddLocalModal />
            </Suspense>
          )}
        </Dialog.Root>
      </div>

      <div>
        <Dialog.Root open={open3} onOpenChange={setOpen3}>
          <Dialog.Trigger className="w-full font-bold text-sm p-2 text-white flex hover:bg-red-700 border-b-[1px] border-red-700 border-opacity-40">
            ADD TRAINER
          </Dialog.Trigger>
          {open3 && (
            <Suspense>
              <LazyAddTrainerModal />
            </Suspense>
          )}
        </Dialog.Root>
      </div>

      <div>
        <Dialog.Root open={open4} onOpenChange={setOpen4}>
          <Dialog.Trigger className="w-full font-bold text-sm rounded-b-lg p-2 text-white flex hover:bg-red-700">
            CREATE BATTLE
          </Dialog.Trigger>
          {open4 && (
            <Suspense>
              <LazyCreateBattleModal />
            </Suspense>
          )}
        </Dialog.Root>
      </div>
    </div>
  )
}

export default DropDownMenu
