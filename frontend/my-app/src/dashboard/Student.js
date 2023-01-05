import {  Box,Button, Card, CardContent, CardMedia,CardActions, Container,Grid,Typography ,TextField} from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Student()  {
  let navigate=useNavigate();
  const btnstyle={margin:"10px 0"}
  const [scholarships,setscholarships]=useState("");

  /*useEffect(()=>{
    const fetchdata = async () => {
      const data= await axios.get("/scholarships/get");
      setscholarships(data);
    };
    fetchdata();
  },[])*/

  return (
    <main>
      <div>
        <Box padding={5}>
        <Button color='secondary' size='large' 
              onClick={() =>{
                  navigate("/dashboard/student/info");
              }}>
              <AccountCircleIcon fontSize='large'/>
              <Typography variant='h4' >Welcome back!!</Typography>
            </Button>
        </Box>
            
        <Box padding={10} margin={5}>
        <Typography variant='h4'><HelpOutlineIcon/>Ask for help</Typography> 
        <TextField
          id="outlined-multiline-static"
          label="Type here"
          multiline
          rows={5}
          margin="dense"
          fullWidth
        />
        <Button type='submit' color='info' variant='contained' style={btnstyle} >Submit</Button>
        </Box>
        
      </div>
    </main>
  )
}
/*<Container maxWidth="md">
             <Grid container spacing={4}>
              <Grid item>
                {
                  scholarships && scholarships?.data.map((scholarship)=>(
                  <Card id={scholarship._id}
                  sx={{ maxWidth: 345 }}>
                    <CardMedia
                      
                      sx={{ height: 140 }}
                      image={scholarship.imageURL}
                      
                    />
                    <CardContent title={scholarship.title}>
                      <Typography gutterBottom variant="h5" component="div">
                        title
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        It is applicable for 12th students of uttar pradesh.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                  ))
                }
              
              </Grid>
             </Grid>
        </Container>*/

export default Student;