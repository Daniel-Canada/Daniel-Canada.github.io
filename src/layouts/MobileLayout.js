import React from 'react'
import { BookmarkBorderOutlined, CottageOutlined, InfoOutlined, LibraryBooksOutlined, MailOutline } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'


function MobileLayout() {
  return (
    <div>
      {/* Top App Bar (Mobile) */}
      <AppBar sx={{display: {sx: "flex", sm: "none"}}}>
        <Toolbar>
          <Typography>Daniel T.</Typography>
        </Toolbar>
      </AppBar>
    
       {/* Bottom App Bar (Mobile) */}
       <AppBar sx={{bottom:0, top: "auto", position: "fixed", display: {xs: "flex", sm: "none"}}}>
        <Toolbar sx={{justifyContent:"center"}}>
          {/*My buttons */}
            {/*Home Button*/}
            <IconButton>
              <CottageOutlined sx={{color: "#000"}}></CottageOutlined>
            </IconButton>
             {/*Project Button*/}
            <IconButton>
              <LibraryBooksOutlined sx={{color: "#000"}}></LibraryBooksOutlined>
            </IconButton>
            {/*Contact Button*/}
            <IconButton>
              <MailOutline sx={{color: "#000"}}></MailOutline>
            </IconButton>
            {/*Bookmark Button*/}
            <IconButton>
              <BookmarkBorderOutlined sx={{color: "#000"}}></BookmarkBorderOutlined>
            </IconButton>
            {/*Info Button*/}
            <IconButton>
              <InfoOutlined sx={{color: "#000"}}></InfoOutlined>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
    
  )
}

export default MobileLayout