import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
import InfoModal from "./InfoModal"


interface CardProps {
  image: string
  name: string
  type: string
}

const Card = (props: CardProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="bg-blue-300/40 p-3 rounded-lg max-h-[150px] grid grid-cols-2 shadow-lg shadow-black/15">
        <div className="m-auto rounded-lg">
          <img src={props.image} alt="" className="w-24" />
        </div>
        <div className="my-auto">
          <p className="text-[20px] font-bold">{props.name}</p>
          <p>{props.type}</p>
        </div>
      </Dialog.Trigger>

      <InfoModal image={props.image} name={props.name} type={props.type} />
    </Dialog.Root>
  )
}

export default Card
