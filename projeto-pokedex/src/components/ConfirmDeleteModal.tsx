import * as Dialog from "@radix-ui/react-dialog"

interface ConfirmDeleteModalProps {
  label: string
  value?: string
}

const ConfirmDeleteModal = (props: ConfirmDeleteModalProps) => {

  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[20rem] h-[11rem] shadow-lg shadow-black/25">
          <Dialog.Title className="bg-red-500 rounded-md py-2 text-xl text-center font-extrabold mb-7">
            DELETE {props.label}?
          </Dialog.Title>

          <div className="grid grid-cols-2 gap-5">
            <button className="rounded bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-xs">
              CONFIRM
            </button>

            <Dialog.Close className="rounded bg-slate-800 mt-3 py-2 px-3 text-white hover:bg-slate-600 font-bold text-xs">
              CANCEL
            </Dialog.Close>
            
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}

export default ConfirmDeleteModal
