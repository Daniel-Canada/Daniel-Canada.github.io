import React from 'react'
import { BookmarkBorderOutlined, CottageOutlined, InfoOutlined, LibraryBooksOutlined, MailOutline } from '@mui/icons-material'
import { Avatar, Drawer,  List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { deepOrange } from '@mui/material/colors'


function BrowserLayout() {
  return (
    <div>
      <Drawer sx={{display: {xs: "none", sm: "flex"}}} variant='permanent'>

        <List>

          <ListItem  sx={{height: "96px"}}>
            <ListItemAvatar sx={{
              display: "flex",
              justifyContent: "center"
         }}>
              <Avatar  sx={{backgroundColor: deepOrange[500]}}>D</Avatar>
            </ListItemAvatar>
            <ListItemText sx={{display: {xs: "none", xl: "flex"}}} primary="Daniel T."></ListItemText>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{justifyContent: "center"}}>
                <CottageOutlined sx={{color: "#000"}}></CottageOutlined>
              </ListItemIcon>
              <ListItemText sx={{display: {xs: "none", xl: "flex"}}}   primary="Home"></ListItemText>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{justifyContent: "center"}}>
              <LibraryBooksOutlined sx={{color: "#000"}}></LibraryBooksOutlined>
              </ListItemIcon >
              <ListItemText sx={{display: {xs: "none", xl: "flex"}}} primary="Projects"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{justifyContent: "center"}}>
                <MailOutline sx={{color: "#000"}}></MailOutline>
              </ListItemIcon>
              <ListItemText sx={{display: {xs: "none", xl: "flex"}}} primary="Contacts"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{justifyContent: "center"}}>
                <BookmarkBorderOutlined sx={{color: "#000"}}></BookmarkBorderOutlined>
              </ListItemIcon>
              <ListItemText sx={{display: {xs: "none", xl: "flex"}}} primary="Bookmarks"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{justifyContent: "center"}}>
              <InfoOutlined sx={{color: "#000"}}></InfoOutlined>
              </ListItemIcon>
              <ListItemText sx={{display: {xs: "none", xl: "flex"}}} primary="Info"></ListItemText>
            </ListItemButton>
          </ListItem>

        </List>

      </Drawer>


    </div>
  )
}

export default BrowserLayout