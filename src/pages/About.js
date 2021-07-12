import React from 'react'
import Footer from '../components/Footer'
import "./About.css"

const About = () => {
    return (<>
        <section className="about-section">
            <div className="container-about">
                <div className="text">
                    <h1 className="main">about Me</h1>
                    <p className="content">Hi there, my name is Altamash Sayed and I write CODE.
                        I am a to be Computer Engineer and currently I am exploring Web Development.
                        I am a person who has high passion for new technologies which make coding easy and fun.
                        I like coding both the frontend as well as the backend.
                        My skill set includes html5, css3, javascript, node.js, express.js, react.js, mongodb</p>
                </div>
                <div className="skills">
                    <h1 className="main">my SKILLS</h1>
                    <div className="icons-1">
                        <i class="fab fa-html5 about-icons"></i>
                        <i class="fab fa-css3 about-icons"></i>
                        <i class="fab fa-js-square about-icons"></i>
                    </div>
                    <div className="icons-1">
                        <i class="fab fa-react about-icons"></i>
                        <i class="fab fa-node about-icons"></i>
                        <i class="fab fa-bootstrap about-icons"></i>
                    </div>

                </div>
            </div>
        </section>
        {/* <Footer /> */}
    </>
    )
}

export default About
