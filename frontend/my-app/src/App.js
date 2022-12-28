import { Button } from '@mui/material';
import { ThemeProvider, Container } from '@mui/system';
import { useEffect } from 'react';
import Appbar from './component/appbar';
import theme from './styles/theme';

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
       <Button variant='contained'>Test</Button>
     </Container> 
    </ThemeProvider>
       
  );
}

export default App;
