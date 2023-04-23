import React from 'react'
import { Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';




function Navbar() {

  const BlueButton = styled(Button)({
    backgroundColor:"black",
    color:'white',
    margin:5,
    "&:hover":{
      backgroundColor:'white',
      border:3,
      color:'black'
    }
  })
  return (
    <div>
        <Button variant="contained" startIcon={<DeleteIcon />} size="small">Delete</Button>
        <Typography variant='h1' component='p'>hello world bro </Typography>
        <BlueButton>my button</BlueButton>
        <Button variant='contained' color='otherColor'>hey bro</Button>
        
    </div>
  )
}

export default Navbar