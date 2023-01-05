import { Avatar, Grid, Paper, Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useNavigate } from "react-router-dom";

const Info = () => {
    let navigate=useNavigate();
    const paperStyle={padding:40, width:1000, margin:"0 25px"}
    const avatarStyle={backgroundColor:'rgb(8 154 214)'}
    const btnstyle={margin:"50px 0"}

  return (
      <Box 
      sx={{
        backgroundColor:"rgb(8 154 214)"
      }}>
          <Grid>
              <Paper style={paperStyle}>
                  <Grid align='center'>
                      <Avatar style={avatarStyle}>
                          <AddTaskIcon />
                      </Avatar>
                      <Typography variant='h4'>Please fill these details!!!</Typography>
                  </Grid>
                  <form>
                      <TextField label="Enter your caste" margin="dense" fullWidth />
                      <TextField label="Enter your 10th passing year" margin="dense" fullWidth />
                      <TextField label="Enter your 12th passing year" margin="dense" fullWidth />
                      <TextField label="Enter your date of birth(DD/MM/YYYY)" margin="dense" fullWidth />
                      <Button type='submit' color='info' variant='contained' style={btnstyle} fullWidth
                          onClick={() => {
                              navigate("/dashboard/student");
                          }}>
                          Submit
                      </Button>
                  </form>

              </Paper>
          </Grid>
      </Box>
    
  )
}

export default Info