import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import Appbar from './component/appbar';
import SignInOutContainer from './component/login/container';
import theme from './styles/theme';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from './component/banner';

import Footer from './component/footer';
import { Box, Typography, Container } from '@mui/material';
import Home from './Home';
import { UIProvider } from './component/context';
import Student from './dashboard/Student';
import Donor from './dashboard/Donor';


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
          
        
        </Container>
      </ThemeProvider>
      
        
          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/register" element={<SignInOutContainer/>}/>
            <Route path='/dashboard/student' element={<Student/>}/>
            <Route path='/dashboard/donor' element={<Donor/>}/>
          </Routes>
        

     
    </Router>
       
  );
  
}

export default App;