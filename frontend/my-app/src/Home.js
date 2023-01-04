import React from 'react'
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Banner from './component/banner';
import Footer from './component/footer';
import { Box, Typography, Container } from '@mui/material';
import Products from './component/products';
import Promotions from './component/promotions';
import AppDrawer from './component/drawer';
import { UIProvider } from "./component/context";
import Fdonor from './component/fdonor';
const Home = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            background: '#949aa8'
          }}
        >
          <UIProvider>
          <Banner/>
          <Promotions/>
          {/* <Box display="flex" justifyContent={"center"} sx={{ p: 4}}>
            <Typography variant="h4"></Typography>

             </Box> */}


          <Products />
          <Fdonor/>
          <Footer />
         <AppDrawer/>
          </UIProvider> 
          
          
        </Container>
      </ThemeProvider>
  )
}

export default Home;