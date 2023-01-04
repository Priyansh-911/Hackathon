import {  Container,Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Student = () => {
  return (
    <main>
      <div>
        <Container maxWidth="xl">
            
            <Typography variant='h3'>
            <AccountCircleIcon fontSize='large' />
              Welcome xyz
            </Typography>
            
           



        </Container>
       
      </div>
    </main>
  )
}

export default Student;