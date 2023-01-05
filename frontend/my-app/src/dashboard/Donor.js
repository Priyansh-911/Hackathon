import React from 'react'
import {  Box,Button, Typography ,TextField} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

import ViewListIcon from '@mui/icons-material/ViewList';


const Donor = () => {
  return (
    <main>

    <div>
    <Box padding={5}>
        <Button color='secondary' size='large' >
              
              <AccountCircleIcon fontSize='large'/>
              <Typography variant='h4' >Welcome back!!</Typography>
            </Button>
        </Box>


         <Box padding={10} margin={5}>
         <Typography variant='h4'><ViewListIcon/>View Requests</Typography> 
          <TextField
           id="outlined-multiline-static"
         
           multiline
           rows={5}
           margin="dense"
           fullWidth
         />
        
         </Box>
        </div>
         </main>
  )
}

export default Donor;