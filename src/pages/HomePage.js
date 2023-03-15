import { Box } from '@mui/system'
import React from 'react'
import PostCard from '../components/postings/PostCard'

function HomePage() {
  return (
    <div>
      <PostCard
        user = "Daniel T."
        content = "Velit fugiat veniam non irure in nisi. Anim labore tempor non cillum adipisicing duis sunt dolor. Culpa ullamco et elit fugiat consectetur veniam adipisicing non. Elit proident irure amet reprehenderit excepteur ullamco voluptate id in eu pariatur ex reprehenderit. Id amet irure eiusmod eu."
      >
      </PostCard>
      <Box height="56px">
      </Box>
    </div>
  )
}

export default HomePage