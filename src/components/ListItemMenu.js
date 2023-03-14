import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

function ListItemMenu({label, buttonComponent}) {




  return (
    <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon sx={{justifyContent: "center"}}>
       {buttonComponent}
      </ListItemIcon>
      <ListItemText sx={{display: {xs: "none", xl: "flex"}}}   primary={label}></ListItemText>
    </ListItemButton>
  </ListItem>
  )
}

export default ListItemMenu