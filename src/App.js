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
import SectionContact from './components/sectionContact/SectionContact';
import Footer from './components/footer/Footer';
import MobileNavBar from './components/navbar/MobileNavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBarRendering />
        <SectionProfile />
        <SectionProject />
        <SectionAbout />
        <SectionContact />
        <Footer />
      </div>

    </ThemeProvider>
  );
}

const NavBarRendering = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 736px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 736px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 736px)",
  });

  return (
    <div>
      {isTabletOrMobile && <MobileNavBar />}
      {isTabletOrMobileDevice && <MobileNavBar />}
      {isDesktopOrLaptop && <NavBar />}
    </div>
  );
};

// const NavBarRendering = () =>{
//   const isDesk
// }

export default App;
