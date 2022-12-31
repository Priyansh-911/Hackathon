import { useTheme } from "@mui/material/styles";
import { Container,Grid,useMediaQuery } from "@mui/material";
import { products } from '../../component/data';
import SingleProduct from "./SingleProduct";
export default function Products() {
    const theme =useTheme();
    const matches =
      useMediaQuery(theme.breakpoints.down('md'));

      const renderProducts = products.map(product => (
        <Grid item key={product.id}
        xs={2}
        sm={4}
        md={4}
        display="flex" 
        flexDirection={"column"}
        alignItems="center">
            <SingleProduct product ={product} matches={matches} />

        </Grid>
      ));
   

    return (
        
        <Container>
            <h1>Popular Scholarships</h1>
            <Grid
            container
            justifyContent={"center"}
            sx={{margin: '20px 4px 10px 4px'}}
            >
            {renderProducts}
            </Grid>

        </Container>
    );
}
