import React from 'react';
import './SectionProfile.css';

// import { ReactComponent as ReactSvg } from './componentIcon/ReactLogo';
import ReactLogo from './componentIcon/ReactLogo'
import NodeLogo from './componentIcon/NodeLogo'
import vsCodeLogo from './componentIcon/vsCodeLogo'
import Fade from 'react-reveal/Fade';
import { ReactComponent as Chevron } from './componentIcon/chevron.svg';
import { Container, Row, Col } from 'reactstrap';

function SectionProfile() {
    return (
        <Fade top>
            <section id="home" className="section section-hero">
                <Fade bottom cascade big duration={1200} delay={800}>
                    <div className="section-hero--text span_8_of_12">
                        <h1>
                            Hey, <span className="kevin">I'm Mikhael
              <span span className="hand" role="img">👋</span>
                            </span>
                        </h1>
                        <h2>Software Engineer</h2>

                        <div className="icons-wrapper">
                            {/* <RubyLogo /> */}
                            <ReactLogo />
                            <NodeLogo />
                            <img align="left" alt="Visual Studio Code" className='vsCode' width="45px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
                            <img align="left" alt="JavaScript" width="45px" className='vsCode' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                            <img align="left" alt="Git" width="45px" className='vsCode' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
                        </div>
                    </div>

                </Fade>

                <Fade delay={3000}>
                    <div className="chevron-position">
                        <a href="#projects" className="section-hero--chevron">
                            {/* <img src={require('../../images/profil.jpg.jpg')} /> */}
                            <Chevron />

                        </a>
                    </div>
                </Fade>
            </section>
        </Fade>
    )
}

export default SectionProfile