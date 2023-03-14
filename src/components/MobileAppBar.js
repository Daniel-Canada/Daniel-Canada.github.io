import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function MobileAppBar() {
  return (
    <AppBar sx={{display: {sx: "flex", sm: "none"}}}>
      <Toolbar>
        <Typography>Daniel T.</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MobileAppBar