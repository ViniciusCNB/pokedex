import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import AddLocalModal from "./AddLocalModal"
import AddPokeModal from "./AddPokeModal"
import AddTrainerModal from "./AddTrainerModal"
import { Menu, Button, MenuItem } from "@mui/material"


const PokedexMenu = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mb-5 bg-white/75 rounded-lg py-5 px-3 shadow-lg shadow-black/15 flex justify-between">
      <input placeholder="Pokémon's Name" type="text" className="bg-gray-200 rounded py-3 px-4" />
        
      <div>
        <Button
          id="basic-button"
          aria-controls={open2 ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? 'true' : undefined}
          onClick={handleClick}
          className="bg-red-500"
        >
          Options
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open2}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger className="text-base font-semibold rounded-md p-3 text-black flex">
                Add Pokémon
              </Dialog.Trigger>
              <AddPokeModal />
            </Dialog.Root>
          </MenuItem>

          <MenuItem>
            <Dialog.Root>
              <Dialog.Trigger className="text-base font-semibold rounded-md p-3 text-black flex">
                Add Local
              </Dialog.Trigger>
              <AddLocalModal />
            </Dialog.Root>
          </MenuItem>

          <MenuItem>
            <Dialog.Root>
              <Dialog.Trigger className="text-base font-semibold rounded-md p-3 text-black flex">
                Add Trainer
              </Dialog.Trigger>
              <AddTrainerModal />
            </Dialog.Root>
          </MenuItem>
        </Menu>
      </div>



    </div>
  )
}

export default PokedexMenu
