import React from 'react'
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Banner from './component/banner';
import Footer from './component/footer';
import { Box, Typography, Container } from '@mui/material';
import Products from './component/products';
import Promotions from './component/promotions';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            background: '#fff'
          }}
        >
          <Banner/>
          <Promotions/>
          <Box display="flex" justifyContent={"center"} sx={{ p: 4}}>
            <Typography variant="h4">Scholarships</Typography>

             </Box>


          <Products />
          <Footer />
          
        </Container>
      </ThemeProvider>
  )
}

export default Home;