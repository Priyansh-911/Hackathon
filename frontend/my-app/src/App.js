import { Button, Container } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import Appbar from './component/appbar';
import theme from './styles/theme';
import Banner from './component/banner/';
import Promotions from './component/promotions';
import Products from './component/products';

function App() {

  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
       <Container
     maxWidth="xl"
     sx={{
       background: '#fff'
     }} 
     >
      <Appbar/>
      <Banner/>
      <Promotions/>
      <Products/>
       
     </Container> 
    </ThemeProvider>
       
  );
}

export default App;
