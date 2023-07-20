import React, { useState } from 'react'
import "./Main.css"
import FolderIcon from '@mui/icons-material/Folder';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const BottomNav = () => {

  const [selected, setSelected] = useState(1)

  const icons = [
    {
      icon : <FolderIcon className={selected === 1 ? "seleted-icon" : "icons"} onClick={() => {setSelected(1)}}/>
    },
    {
      icon : <ExploreIcon className={selected === 2 ? "seleted-icon" : "icons"} onClick={() => {setSelected(2)}}/>
    },
    {
      icon : <NotificationsIcon className={selected === 3 ? "seleted-icon" : "icons"} onClick={() => {setSelected(3)}}/>
    },
    {
      icon : <SettingsIcon className={selected === 4 ? "seleted-icon" : "icons"} onClick={() => {setSelected(4)}}/>
    }
  ]

  return (
    <div className='bottom-nav'>
      <div className='icons-div'>
        {
          icons.map((icon) => {
            return icon.icon
          })
        }
      </div>
    </div>
  )
}

export default BottomNav