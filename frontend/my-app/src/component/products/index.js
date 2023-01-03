import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useTheme } from "@mui/material/styles";
import { Container,Grid,useMediaQuery } from "@mui/material";
import { products } from '../../component/data';
import SingleProduct from "./SingleProduct";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link as RouterLink, Router } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function Products() {
    const theme =useTheme();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    // const matches =
    //   useMediaQuery(theme.breakpoints.down('md'));

    //   const renderProducts = products.map(product => (
    //     <Grid item key={product.id}
    //     xs={2}
    //      sm={4}
    //     md={4}
    //     display="flex" 
    //     flexDirection={"column"}
    //     alignItems="center">
    //         <SingleProduct product ={product} matches={matches} />

    //     </Grid>
    //   ));
   

    return (
        
        <Container>
            <h1>Popular Scholarships</h1>
            <Grid
            container spacing={2}
           justifyContent={"center"}
            // sx={{margin: '0px 0px 0px '}}
            >
             <Grid item xs={4}>
             <Card sx={{ minWidth: 275}}>
      <CardContent>
        <img src="image\products\indu.jpg"  alt="indu" style={{ width: "100%", height: "40vh" }}></img>

{/*        
        <Typography sx={{ fontSize: 14 }} color="text.secondary"  gutterBottom>
          INDUSIND FOUNDATION SCHOLARSHIP
        </Typography> */}
        
       
      
     
     


 <Button href="https://github.com/" variant="contained">
   INDUSIND FOUNDATION SCHOLARSHIP
   </Button>


</CardContent>




 



    </Card>
              </Grid> 
              <Grid item xs={4} >
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="https://i0.wp.com/www.scholarshipsinindia.com/wp-content/uploads/Siemens-Scholarship-Program-2.jpg?fit=200%2C200&ssl=1" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Seimens Scholarship Program
        </Typography>
      </CardContent>
    </Card>
              </Grid> 
              <Grid item xs={4}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="https://s3-ap-southeast-1.amazonaws.com/cdn.buddy4study.com/static/scholarship_logo/logo_17037_1569394027.png" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          AICTE Saksham Scholarship
        </Typography>
        
       
      </CardContent>
    </Card>



              </Grid> 
            </Grid>
            {/* VIEW MORE<ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
       
      <Grid
            container spacing={2}
           // justifyContent={"center"}
            // sx={{margin: '1px 2px 10px '}}
            >
             <Grid item xs={4}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="data:image/jpeg;base64,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" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Gandhi Fellowship Program
        </Typography>
        











       
      </CardContent>
    </Card>
              </Grid> 
              <Grid item xs={4}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="https://buddy4study.s3.ap-southeast-1.amazonaws.com/article/wp-content/uploads/2022/08/06155611/Central-Sector-Scholarship-%E2%80%93-A-Scholarship-Scheme-for-College-and-University-Students.jpg" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Central Sector Scholarship
        </Typography>
      </CardContent>
    </Card>
              </Grid> 
              <Grid item xs={4}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="https://buddy4study.s3.ap-southeast-1.amazonaws.com/article/wp-content/uploads/2021/09/29142432/Pragati-Scholarship-%E2%80%93-AICTE-Scholarship-Scheme-for-Girl-Child.jpg" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          AICTE Pragati Scholarship
        </Typography>
        
       
      </CardContent>
    </Card>
        


    
    
    </Grid>
    </Grid>
    </Collapse>




     
         <Collapse in={expanded}  timeout="auto" unmountOnExit>
       
      <Grid
            container spacing={2}
           // justifyContent={"center"}
            // sx={{margin: '1px 2px 10px '}}
            >
             <Grid item xs={4}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/10/06202610/UGC-Scholarships-for-girls.jpg" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         UGC Grant Scholarship
        </Typography>
        
       
      </CardContent>
    </Card>
              </Grid> 
              <Grid item xs={4}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="https://indiacsr.in/wp-content/uploads/2022/07/kc-mahindra.jpg" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          K.C.MAHINDRA Scholarship
        </Typography>
      </CardContent>
    </Card>
              </Grid> 
              <Grid item xs={4}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="image\products\indu.jpg" alt="indu" style={{ width: "100%", height: "40vh" }}></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          INDU MY DARLING
        </Typography>
        
       
      </CardContent>
    </Card>
        
    
    
    </Grid>
    </Grid>

 




   
    </Collapse>


    
    VIEW MORE<ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </Container>
    );
}
