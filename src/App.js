import React from 'react';
// import logo from './logo.svg';
import { ThemeProvider } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import theme from './theme'

import './App.css';
import './grid.css';
import './theme.css';

import NavBar from './components/navbar/NavBar';
import SectionProfile from './components/SectionProfile/SectionProfile';
import SectionProject from './components/sectionProject/SectionProject';
import SectionAbout from './components/sectionAbout/SectionAbout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        <SectionProfile/>
        <SectionProject/>
        <SectionAbout/>
      </div>
      
    </ThemeProvider>
  );
}

// const NavBarRendering = () =>{
//   const isDesk
// }

export default App;
