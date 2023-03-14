import { AppBar, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { buttons } from '../data/buttons'

function BottomMobileBar() {


  const mobileButtons = buttons.map((button, index)=>{
    return <IconButton key={index}>{button.icon}</IconButton>
  });

  return (
    <AppBar sx={{bottom:0, top: "auto", position: "fixed", display: {xs: "flex", sm: "none"}}}>
        <Toolbar sx={{justifyContent:"center"}}>
          {/*My buttons */}
          {mobileButtons}
        </Toolbar>
      </AppBar>
  )
}

export default BottomMobileBar