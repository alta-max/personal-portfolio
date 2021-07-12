import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [button, setButton] = useState(true);
    const [click, setclick] = useState(false);

    const showButton = () => {
        if (window.innerWidth >= 1230) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (<>

        <div className="header">
            <div className="heading">
                {click ? <ul className="toggle-nav-container">
                    <li>
                        <Link to="/" onClick={() => setclick(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setclick(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setclick(false)}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={() => setclick(false)}>Projects</Link>
                    </li>
                </ul> : "Altamash Sayed"}
            </div>

            <nav>
                <div className="menu-icons" onClick={() => setclick(!click)}>
                    <i className={button && "fas fa-bars toggle-icon"} ></i>
                </div>
                <ul className="container">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>

        </div></>
    )
}

export default Navbar
