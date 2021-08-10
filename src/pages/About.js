import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (<Wrapper>
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
    </Wrapper>
    )
}

const Wrapper = styled.section`
.about-section {
  background-color: black;
  color: #fff;
  height: 80vh;
  font-family: "Montserrat", sans-serif;
}

.main {
  font-size: 2rem;
  padding: 2rem;
}

.text {
  width: 50%;
}

.content {
  font-size: 1.5rem;
}

.container-about {
  display: flex;
  padding: 6rem;
  justify-content: space-between;
}

.about-icons {
  font-size: 4rem;
  margin: 2rem;
}

@media (max-width: 1230px) {
  .about-section {
    height: 100%;
  }
}

@media (max-width: 900px) {
  .about-section {
    height: 100%;
    text-align: center;
  }
  .container-about {
    flex-direction: column;
  }
  .text {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 425px) {
  /* .about-section {
    height: 100vh;
  } */
  .main {
    font-size: 1rem;
  }
  .content {
    font-size: 0.8rem;
  }
  .icons-1 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .about-icons {
    font-size: 2rem;
  }
  .container-about {
    padding: 0;
    height: 75vh;
    justify-content: center;
  }
}

`

export default About
