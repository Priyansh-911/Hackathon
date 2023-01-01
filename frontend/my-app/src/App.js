import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import Appbar from './component/appbar';
import SignInOutContainer from './component/login/container';
import theme from './styles/theme';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from './component/banner';

import Footer from './component/footer';
import { Box, Typography, Container } from '@mui/material';
import Products from './component/products';
import Promotions from './component/promotions';


function App() {

  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <Router>
    
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            background: '#fff'
          }}
        >
          <Appbar />
          <Banner/>
          <Promotions/>
          <Box display="flex" justifyContent={"center"} sx={{ p: 4}}>
            <Typography variant="h4">Scholarships</Typography>

             </Box>


          <Products />
          <Footer />
          
        </Container>
      </ThemeProvider>
        
          
          <Routes>
            <Route path="/login" element={<SignInOutContainer/>}/>
          </Routes>
        

     
    </Router>
       
  );
  
}

export default App;