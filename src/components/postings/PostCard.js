import { BookmarkBorder, CenterFocusWeak, FavoriteBorderOutlined } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import PostContent from './PostContent'

function PostCard({user, content}) {
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
        
        
        <PostContent
          user = {user}
          content = {content}
        >
        </PostContent>
      </Card>

    </div>
  )
}

export default PostCard