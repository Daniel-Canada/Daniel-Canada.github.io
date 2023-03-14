import { Drawer, List } from '@mui/material'
import React from 'react'
import { buttons } from '../data/buttons';
import ListItemMenu from './ListItemMenu';
import ListItemTitleIcon from './ListItemTitleIcon'

function MenuLeftDrawer() {
  const buttonsMap = buttons.map((button, index)=>{
    return <ListItemMenu
      label = {button.label}  buttonComponent = {button.icon} key={index}
    >
    </ListItemMenu>
  });
  return (
  <Drawer sx={{display: {xs: "none", sm: "flex"}}} variant='permanent'>
    <List>
      {/*

        Main Icon in the Top Left

      */}
      <ListItemTitleIcon></ListItemTitleIcon>

      {/*
          
          It displays the Buttons we see on the left drawer & Buttons text
          /data/buttons.js       

      */}
      {buttonsMap}

    </List>
  </Drawer>
  )
}

export default MenuLeftDrawer