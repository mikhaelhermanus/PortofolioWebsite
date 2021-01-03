import React from 'react';
import './Footer.css';

import Fade from 'react-reveal/Fade';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub, faTwitter, faMediumM } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <Fade bottom cascade>
            <footer className="footer">
                <div className="inner-footer span_8_of_12">
                    <div className="footer--text">
                        <p>Built with ReactJS.</p>
                        <p className="copyright">
                            &copy; Mikhael Hermanus 2020. All rights reserved.
          </p>
                    </div>

                    <span className="icons">
                        <a href="https://www.linkedin.com/in/mikhaelhermanus/" target="blank"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
                        <a href="https://github.com/mikhaelhermanus" target="blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        <a href="https://www.instagram.com/mikhaelhrm/" target="blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    </span>
                </div>
            </footer>
        </Fade>
    )
}

export default Footer