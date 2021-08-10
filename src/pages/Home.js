import React from 'react'
import styled from 'styled-components'
import About from "../pages/About"
import Contact from './Contact'
import Projects from './Projects'

const Home = () => {
    return (<Wrapper>
        <section className="section">
            <h3 className="intro-text">Hello, I'm </h3>
            <h1 className="name">Altamash <br></br>Sayed</h1>
            <h2>Full STACK Web Developer by Passion</h2>
        </section>
        <About />
        <Contact />
        <Projects />
    </Wrapper>
    )
}

const Wrapper = styled.section`
.section {
  height: 75vh;
  text-align: center;
  font-family: "Amatic SC", cursive;
}

.name {
  font-size: 8rem;
  letter-spacing: 1rem;
}

.intro-text {
  font-size: 3rem;
}

@media (max-width: 1230px) {
  .section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .name {
    font-size: 4rem;
  }
}
@media (max-width: 900px) {
  .section {
    padding-top: 4rem;
  }
}
@media (max-width: 425px) {
  .section {
    padding-top: 4rem;
  }
  .intro-text {
    font-size: 2rem;
  }
  .name {
    font-size: 4rem;
  }
}

`

export default Home
