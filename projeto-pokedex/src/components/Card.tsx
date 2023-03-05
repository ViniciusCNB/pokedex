import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
import InfoModal from "./InfoModal"


interface CardProps {
  image: string
  name: string
  url: string
}

const Card = (props: CardProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="p-3 rounded-lg max-h-[150px] grid grid-cols-2 shadow-lg shadow-black/15 bg-gradient-to-r from-blue-300/40 to-blue-600/40 hover:bg-blue-300">
        <div className="m-auto rounded-lg">
          <img src={props.image} alt="" className="w-24" />
        </div>
        <div className="my-auto">
          <p className="text-black/80 text-[16px] font-bold">{props.name.toUpperCase()}</p>
        </div>
      </Dialog.Trigger>

      <InfoModal image={props.image} name={props.name} url={props.url} />
    </Dialog.Root>
  )
}

export default Card
