import React from 'react'
import { Tooltip,IconButton, Fab, Modal,Typography, styled,Avatar,Box, TextField,Stack, ButtonGroup, Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
// import { Box, style } from '@mui/system';
import { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';

import FavoriteIcon from '@mui/icons-material/Favorite';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SendIcon from '@mui/icons-material/Send';


const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const Userbox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"10px"
    
})



function Add() {


  const [open,setOpen] = useState(false);
  return (
   <div>
    <Tooltip onClick={e=>setOpen(true)}
    title="add photo" sx={{position:'fixed',bottom:20,left:{xs:"calc(45%)", md:"30px"}}}>
    <Fab color="primary" aria-label="add">
       <AddIcon />
    </Fab>
    </Tooltip>
     
<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}> 
     <Typography variant='h6' color="gray" textAlign="center"></Typography>
      <Userbox sx={{marginTop:7}}>
      <Avatar 
        src='/images/one.jpg'
        sx={{width:30,height:30}}
      />
      <Typography fontWeight={500} variant="span">Appu</Typography>
      </Userbox>


      <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="whats on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color='primary'/>
            <AddReactionIcon sx={{color:'orange'}}/>
            <FavoriteIcon sx={{color:'red'}}  />
            <ImageIcon  sx={{color:'green'}}/>
            <VideocamIcon sx={{color:'blue'}}/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
        <Button>post</Button>
        <Button sx={{width:"100px"}}><SendIcon></SendIcon></Button>
        
 
</ButtonGroup>
  </Box>
</StyledModal>





   </div>
  )
}

export default Add