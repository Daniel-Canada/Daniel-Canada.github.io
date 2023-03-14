import { Box } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import BrowserLayout from './BrowserLayout'
import MobileLayout from './MobileLayout'

function MainLayout() {



  return (
    <div>
      {/* Layout for Mobile */}
      <MobileLayout></MobileLayout>

      {/* Drawer or Menu Bar (Tablet or Browser - Left)  */}
      <BrowserLayout></BrowserLayout> 
      
      {/* Main Content  */}
      <Box sx={{position: "relative", top: "56px", left: {xs: "0", sm: "88px", xl: "-107.61px"}, justifyContent: "center" , display: "flex"}}>
       
       <Outlet></Outlet>
       <Box sx={{height: {xs: "56px", sm: "0"}}}></Box>

      </Box>
      
    
    </div>
  )
}

export default MainLayout