import { useState } from "react"
import DropDownMenu from "./DropDownMenu"
import { ClickAwayListener } from "@mui/base"

interface PokedexMenuProps {
  handleFilterText: (text: string) => void
}

const PokedexMenu = (props: PokedexMenuProps) => {
  const [open, setOpen] = useState(false)
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="mb-5 bg-white/75 rounded-lg py-5 px-3 shadow-lg shadow-black/15 flex justify-between">
        <input
          placeholder="Search Pokémon"
          type="text"
          className="bg-gray-200 rounded py-3 px-4"
          onChange={(e) => {
            props.handleFilterText(e.target.value)
          }}
        />

        <div>
          <button
            className="rounded bg-red-500 p-3 text-white hover:bg-red-700 font-bold"
            onClick={() => setOpen(!open)}
          >
            OPTIONS
          </button>

          {open ? <DropDownMenu /> : ""}
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default PokedexMenu
