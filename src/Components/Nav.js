import {Menu,MenuItem, AppBar, Box, InputBase, styled, Toolbar, Typography,Badge, Avatar } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import { NotificationAdd } from '@mui/icons-material';

const Styledtoolbar = styled(Toolbar)({
    backgroundColor:"#5B12EE",
    display:"flex",
    justifyContent:"space-between",
})

const Search = styled("div")(({theme}) => ({
    backgroundColor:"white",
    padding:"0 20px",
    // borderRadius:theme.shape.borderRadius,
    borderRadius:"3px",
    width:"40%",
}))

const Icons = styled(Box)(({theme}) => ({
    // backgroundColor:"white",
    display:"flex",
    gap:"10px",
    alignItems:"center"

    
}))

const Userbox = styled(Box)(({theme}) => ({
    // backgroundColor:"white",
    display:"flex",
    gap:"20px",
    alignItems:"center"

    
}))

function Nav() {

    const[open,setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
        <Styledtoolbar>
            <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>Facebook</Typography>
            <FacebookIcon  sx={{display:{xs:"block",sm:"none"}}}/>
            <Search><InputBase></InputBase></Search>
            <Icons>
               <Badge badgeContent={4} color="error">
               <MailIcon color="action" sx={{color:'white'}}/>
               </Badge>
               <Badge badgeContent={2} color="error">
               <NotificationAdd color="action" sx={{color:'white'}}/>
               </Badge>
               <Avatar sx={{width:30,height:30,marginBottom:1}} src='/images/appu.jpg'
               onClick={e=>setOpen(true)}
               />
            </Icons>

        </Styledtoolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        // onClose={handleClose}
        onClose={e=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Nav