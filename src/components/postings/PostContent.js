import { CardContent, Typography } from '@mui/material'
import React from 'react'

function PostContent({user, content}) {
  return (
    <CardContent sx={{paddingTop: "0"}}>
      <Typography
        display="inline"
        variant='body2' 
        sx={{fontWeight: "bold"}}
      >
        {user}
      </Typography>
      <Typography
        display="inline"
        variant='body2' 
        align='justify'
      >
        {content}
      </Typography>
    </CardContent>
  )
}

export default PostContent