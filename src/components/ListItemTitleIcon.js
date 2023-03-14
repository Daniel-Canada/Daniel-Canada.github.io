import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'

function ListItemTitleIcon() {
  return (
    <ListItem  sx={{height: "96px"}}>
      <ListItemAvatar sx={{
        display: "flex",
        justifyContent: "center"
        }}>
        <Avatar  sx={{backgroundColor: deepOrange[500]}}>D</Avatar>
      </ListItemAvatar>
      <ListItemText sx={{display: {xs: "none", xl: "flex"}}} primary="Daniel T."></ListItemText>
    </ListItem>
  )
}

export default ListItemTitleIcon