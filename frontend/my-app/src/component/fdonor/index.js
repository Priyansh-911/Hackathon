import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container,Grid,useMediaQuery } from "@mui/material";

export default function ImgMediaCard() {
  return (
    < Container>
    
        <h1>Popular Donors</h1>
        <Grid
            container spacing={12}
           // justifyContent={"center"}
            // sx={{margin: '1px 2px 10px '}}
            >
             <Grid item xs={5}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="https://static.theprint.in/wp-content/uploads/2019/03/Azim-Premji-image.jpg?compress=true&quality=80&w=376&dpr=2.6 " alt="indu" style={{ width: "100%", height: "40vh" }}></img>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          INDU MY DARLING
        </Typography> */}
        
       
      </CardContent>
    </Card>
              </Grid> 
              <Grid item xs={7}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography gutterBottom variant="h4" component="div">
          
      Azim Prem JI
        </Typography>
        <Typography variant="body2" color="text.secondary" alt="indu" style={{ width: "100%", height: "30vh" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
              </Grid> 
              </Grid> 


    




       
      <Grid
            container spacing={12}
           // justifyContent={"center"}
            // sx={{margin: '1px 2px 10px '}}
            >
             {/* <Grid item xs={5}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="https://static.theprint.in/wp-content/uploads/2019/03/Azim-Premji-image.jpg?compress=true&quality=80&w=376&dpr=2.6" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          INDU MY DARLING
        </Typography>
        
       
      </CardContent>
    </Card>
             </Grid>  */}
              <Grid item xs={7}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography gutterBottom variant="h4" component="div">
         RATAN TATA
        </Typography>
        <Typography variant="body2" color="text.secondary" alt="indu" style={{ width: "100%", height: "35vh" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
              </Grid> 


              <Grid item xs={5}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1E3gd3rMtzcBiXVRWiyDoF5J1sqpaSpkcW005DZYuU0o_RVwbNPvo9v3ZZJ4ZgEcQQkE_NKCqTt1tayI" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
         {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          INDU MY DARLINGhttps://static.theprint.in/wp-content/uploads/2019/03/Azim-Premji-image.jpg?compress=true&quality=80&w=376&dpr=2.6
        </Typography> */}
        
       
      </CardContent>
    </Card>
             </Grid>
              </Grid> 


    


    </Container>
   
  );
}

    




