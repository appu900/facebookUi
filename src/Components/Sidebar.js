import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText, Switch} from '@mui/material'
import React from 'react'
import FeedIcon from '@mui/icons-material/Feed';
import HomeIcon from '@mui/icons-material/Home';
import Groups2Icon from '@mui/icons-material/Groups2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import zIndex from '@mui/material/styles/zIndex';
function Sidebar({mode,setMode}) {
  return (
  <Box 
  
   flex={1} sx={{display:{
      xs:"none",
      sm:"block "
      
  }}}>
<Box position="fixed">
<List>
      <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <FeedIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Groups2Icon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="frinds" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="settings" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <DarkModeIcon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode == "light" ?"dark":"light")} />
            </ListItemButton>
        </ListItem>
</List>


  
  </Box>
  </Box>
  
  

  )
}

export default Sidebar