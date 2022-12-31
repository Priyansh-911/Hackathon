
import { ThemeProvider, Container } from '@mui/system';
import { useEffect } from 'react';
import Appbar from './component/appbar';
import SignInOutContainer from './component/login/container';
import theme from './styles/theme';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            <Route path='/login' element={<SignInOutContainer/>}/>
          </Routes>
        

     
    </Router>
       
  );
  
}

export default App;
