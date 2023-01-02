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
            container spacing={6}
           // justifyContent={"center"}
            sx={{margin: '1px 2px 10px '}}
            >
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
            VIEW MORE<ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
       
      <Grid
            container spacing={6}
           // justifyContent={"center"}
            sx={{margin: '1px 2px 10px '}}
            >
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
        </Container>
    );
}
