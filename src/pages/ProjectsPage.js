import React from 'react'
import PostCard from '../components/postings/PostCard'

function ProjectsPage() {
  return (
    <div>
      <PostCard
         user = "Gym Why"
         image = "IMG_4422.JPG"
         content = " React Application that allows users to create their workout plan. The application uses Node JS and Express for the backend and MySQL for the database.  "
      >
        
      </PostCard>
      <PostCard
         user = "Endomondo"
         image = "RUN.JPG"
         content = " Android App to track your running and cycling workouts. The application uses Java and Endomondo API.  "
      >
        
      </PostCard>
      <PostCard
         user = "Checkers"
         image = "CHECKERS.JPG"
         content = " Python application that allows users to play against an AI. The application uses the Minimax algorithm to determine the best move.  "
      >
        
      </PostCard>

    </div>
  )
}

export default ProjectsPage