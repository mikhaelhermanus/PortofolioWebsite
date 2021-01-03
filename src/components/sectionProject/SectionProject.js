import React from 'react'
import './SectionProject.css';
import Project from './componentProject/Project';

import Fade from 'react-reveal/Fade';

function SectionProject() {
    return (
        <Fade bottom cascade>
            <section id="projects" className="section section-projects span_8_of_12">

                <h3>Projects</h3>

                <div className="projects-wrapper">
                    <Project
                        title="Project 1"
                        description="This page is under Construction"
                        keyword="contact Developer"
                        imgURL="/images/comingsoon.jpg"
                    />
                    <Project
                        title="Project 2"
                        description="This page is under Construction"
                        keyword="contact developer"
                        imgURL="/images/comingsoon.jpg"
                    />
                    <Project
                        title="Project 3"
                        description="This page is under Construction"
                        keyword="contact developer"
                        imgURL="/images/comingsoon.jpg"
                    />


                </div>
            </section>
        </Fade>
    )
}

export default SectionProject