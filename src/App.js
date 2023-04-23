import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Feeds from './Components/Feeds';
import Rightbar from './Components/Rightbar';
import Yu from './Components/Yu';
import { Container } from '@mui/system';
import Nav from './Components/Nav';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './Components/Add';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState("dark");
  const darktheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darktheme}>
       <Box bgcolor={"background.default"} color={"text.primary"}>
        <Nav/>
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feeds/>
          <Rightbar/>
        </Stack>
        <Add/>

</Box>

    </ThemeProvider>
   
  );
}

export default App;
