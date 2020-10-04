import React from 'react';
import './SectionContact.css';
import Fade from 'react-reveal/Fade';

import ContactForm from './ContactForm';

function SectionContact() {
    return(
      <Fade bottom cascade>
        <section id="contact" className="section-contact span_8_of_12">
  
          <h3>Contact</h3>
          
          <p>I love to connect face-to-face around <span className="connect--how"><em>Lemon Tea</em></span> and <span className="connect--how"><em>food</em></span>.</p> 
          <p className="p--socials">
           or you can make it possible with virtually on <a href="https://www.facebook.com/mikhaelhrm" target="blank">
              facebook
            </a> and <a href="https://www.linkedin.com/in/mikhaelhermanus/" target="blank">
              Linkedin
            </a>.
            <p>
              For my  dayly activity of my life, you can jump on <a href="https://www.instagram.com/mikhaelhrm" target="blank">
              Instagram
              </a>. I'm also developing my others project and learning new programming skill on <a href="https://github.com/mikhaelhermanus" target="blank">
                github
              </a>
            </p>
          </p>
        
          <a href="../../../public/Mikhael_hermanus_CV.pdf" target="blank" className="button resume-button"><span className="button-text">download resume</span></a>
  
          <ContactForm />
        </section>
      </Fade>
    )
  }
  
  
  export default SectionContact