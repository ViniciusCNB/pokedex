import * as Dialog from "@radix-ui/react-dialog"

const AddModal = () => {
  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
        
        <Dialog.Content className="fixed bg-slate-400/80 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] shadow-lg shadow-black/25">

        <Dialog.Title className="text-4xl text-center font-bold mb-10">Add a Pokémon</Dialog.Title>


        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}

export default AddModal
