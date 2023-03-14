import React from 'react'
import MobileAppBar from '../components/MobileAppBar'
import BottomMobileBar from '../components/BottomMobileBar'


function MobileLayout() {
  return (
    <div>
      {/* Top App Bar (Mobile) */}
      <MobileAppBar></MobileAppBar>
    
       {/* Bottom App Bar (Mobile) */}
       <BottomMobileBar></BottomMobileBar>
    </div>
    
  )
}

export default MobileLayout