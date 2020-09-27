import React from 'react';
import './SectionProfile.css';

// import { ReactComponent as ReactSvg } from './componentIcon/ReactLogo';
import ReactLogo from './componentIcon/ReactLogo'
import Fade from 'react-reveal/Fade';
import {ReactComponent as Chevron} from './componentIcon/chevron.svg';

function SectionProfile() {
    return (
        <Fade top>
            <section id="home" className="section section-hero">
                <Fade bottom cascade big duration={1200} delay={800}>
                    <div className="section-hero--text span_8_of_12">
                        <h1>
                            Hey, <span className="kevin">I'm Mikhael
              <span className="hand" role="img">👋</span>
                            </span>
                        </h1>
                        <h2>Frontend Developer</h2>

                        <div className="icons-wrapper">
                            {/* <RubyLogo /> */}
                            <ReactLogo />
                            {/* <NodeLogo /> */}
                        </div>
                    </div>
                </Fade>

                <Fade delay={3000}>
                    <div className="chevron-position">
                        <a href="#projects" className="section-hero--chevron">
                            {/* <img src={require('../../images/profil.jpg.jpg')} /> */}
                            <Chevron/>
                        </a>
                    </div>
                </Fade>
            </section>
        </Fade>
    )
}

export default SectionProfile