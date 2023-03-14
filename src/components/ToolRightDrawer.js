import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import React from 'react'
import { socials } from '../data/buttons'
import ListItemSocial from './ListItemSocial';

function ToolRightDrawer() {


  const socialMap = socials.map((social, index)=>{
    return <ListItemSocial label={social.label} key={index} icon={social.icon} sublabel={social.name}></ListItemSocial>
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
            <ListItemText sx={{maxWidth: "251.938px"}} primary="Lorem Lorem veniam est irure magna do ullamco consectetur exercitation. In et voluptate amet dolore ea. Commodo qui est enim id officia anim occaecat. Nostrud culpa aute qui voluptate labore labore. Labore tempor proident dolor id dolor ut anim cillum. Anim enim elit sit occaecat in nostrud amet aute aliquip aute ipsum enim dolor ad. Occaecat ullamco dolore cillum elit proident cupidatat nostrud et dolore consequat exercitation.">

            </ListItemText>
        </ListItem>
      </List>

    </Drawer>
  )
}

export default ToolRightDrawer