import { GitHub, LinkedIn } from '@mui/icons-material'
import { Drawer, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BrowserLayout from './BrowserLayout'
import MobileLayout from './MobileLayout'

function MainLayout() {



  return (
    <div>
      {/* Layout for Mobile */}
     <MobileLayout></MobileLayout>

      {/* Drawer or Menu Bar (Tablet or Browser - Left)  */}
      <BrowserLayout></BrowserLayout> 
  
      <Box sx={{position: "relative", top: "56px", left: {xs: "0", sm: "88px", xl: "-107.61px"}, justifyContent: "center" , display: "flex"}}>
       <Outlet></Outlet>
      
       <Box sx={{height: {xs: "56px", sm: "0"}}}></Box>
      </Box>
      
      {/* Drawer to display Social Network & Bookmark content */}
      <Drawer variant="permanent" anchor="right"  sx={{display: {xs: "none", xl: "flex"}}}>
        <List>
        <ListItem>
          <ListItemText primary="Social Networks"></ListItemText>
        </ListItem>
          <ListItem>
            <ListItemAvatar>
              <GitHub></GitHub>
            </ListItemAvatar>
            <ListItemText primary="GitHub" secondary="Daniel-Canada"></ListItemText> <ListItemButton>
            <Typography>Go</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <LinkedIn></LinkedIn>
            </ListItemAvatar>
            <ListItemText primary="Linkedin" secondary="Daniel T."></ListItemText> <ListItemButton>
            <Typography>Go</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemText sx={{maxWidth: "251.938px"}} primary="Lorem Lorem veniam est irure magna do ullamco consectetur exercitation. In et voluptate amet dolore ea. Commodo qui est enim id officia anim occaecat. Nostrud culpa aute qui voluptate labore labore. Labore tempor proident dolor id dolor ut anim cillum. Anim enim elit sit occaecat in nostrud amet aute aliquip aute ipsum enim dolor ad. Occaecat ullamco dolore cillum elit proident cupidatat nostrud et dolore consequat exercitation.">

            </ListItemText>
          </ListItem>
        </List>
    
      </Drawer>
    </div>
  )
}

export default MainLayout