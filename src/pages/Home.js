import React from 'react'
import Footer from '../components/Footer'
import About from "../pages/About"
import Contact from './Contact'
import "./Home.css"
import Projects from './Projects'

const Home = () => {
    return (<>
        <section className="section">
            <h3 className="intro-text">Hello, I'm </h3>
            <h1 className="name">Altamash <br></br>Sayed</h1>
            <h2>Full STACK Web Developer by Passion</h2>
        </section>
        <About />
        <Contact />
        <Projects />
    </>
    )
}

export default Home
