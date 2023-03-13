import { BookmarkBorder, CenterFocusWeak, FavoriteBorderOutlined } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Card sx={{minWidth: "358px", maxWidth: "468px"}}>
        <CardHeader
          avatar={<Avatar sx={{backgroundColor: deepOrange[500]}}>D</Avatar>}
          action={<IconButton><CenterFocusWeak></CenterFocusWeak></IconButton>}
          title="Daniel T."
          subheader="Programmer"
        >
        </CardHeader>
        <CardMedia
          component="img"
          image="IMG_1200.JPG"
          height="618px"
        >
        </CardMedia>
        <CardActions disableSpacing>
          <IconButton>
            <FavoriteBorderOutlined></FavoriteBorderOutlined>
          </IconButton>
          <IconButton>
           <BookmarkBorder></BookmarkBorder>
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography
            display="inline"
            variant='body2' 
            sx={{fontWeight: "bold"}}
          >
            Daniel T.
          </Typography>
          <Typography
            display="inline"
            variant='body2' 
          >
            Eu magna adipisicing nulla adipisicing est laborum. Est laboris ullamco excepteur non non. Ex culpa id amet do incididunt mollit ea.
          </Typography>
        </CardContent>
      </Card>
      <Box height="56px">
      </Box>
    </div>
  )
}

export default HomePage