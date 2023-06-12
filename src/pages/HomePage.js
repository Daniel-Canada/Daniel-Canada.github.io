import { Box } from '@mui/system'
import React from 'react'
import PostCard from '../components/postings/PostCard'

function HomePage() {
  return (
    <div>
      <PostCard
        user = "Daniel T."
        content = "  Hi, I'm Daniel. I'm a software developer with a passion for learning and creating. I studied at Concordia University in Montreal, Quebec, Canada. I have a Bachelor's degree in Computer Science. I'm currently working as a software developer at a company called Mouvement Desjardins. I'm always looking for new opportunities to learn and grow as a developer. "
        image = "IMG_1200.JPG"
      >
      </PostCard>
      <Box height="56px">
      </Box>
    </div>
  )
}

export default HomePage