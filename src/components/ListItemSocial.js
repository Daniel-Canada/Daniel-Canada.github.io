import { ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

function ListItemSocial({label, icon, sublabel, link}) {

  function redirect(){
    window.location.href = link;
  }

  return (
    <ListItem>
      {/* Avatar */}
      <ListItemAvatar>
        {icon}
      </ListItemAvatar>

      {/* Label   */}
      <ListItemText primary={label} secondary={sublabel}></ListItemText> 


      {/* Click Button  */}
      <ListItemButton sx={{justifyContent: "flex-end"}} onClick={redirect}>
        <Typography color={blue[500]}>Go</Typography>
      </ListItemButton>

    </ListItem>
  )
}

export default ListItemSocial