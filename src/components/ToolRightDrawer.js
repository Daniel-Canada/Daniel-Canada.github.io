import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import React from 'react'
import { socials } from '../data/buttons'
import ListItemSocial from './ListItemSocial';

function ToolRightDrawer() {


  const socialMap = socials.map((social, index)=>{
    return <ListItemSocial label={social.label} key={index} link={social.link} icon={social.icon} sublabel={social.name}></ListItemSocial>
  });

  return (
    <Drawer variant="permanent" anchor="right"  sx={{display: {xs: "none", xl: "flex"}}}>
      <List>
        {/*Header for the Right Drawer */}
        <ListItem>
          <ListItemText primary="Social Networks"></ListItemText>
        </ListItem>
        
        {socialMap}
      
        <ListItem>
            <ListItemText sx={{maxWidth: "251.938px"}} primary="">

            </ListItemText>
        </ListItem>
      </List>

    </Drawer>
  )
}

export default ToolRightDrawer