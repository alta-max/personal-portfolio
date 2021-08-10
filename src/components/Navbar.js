import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
    return (<NavContainer>

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

        </div></NavContainer>
    )
}

const NavContainer = styled.nav`
.heading {
  font-family: "Sacramento", cursive;
  font-size: 3rem;
  margin: 2rem;
  padding-left: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.container {
  display: flex;
  margin: 2rem;
  padding: 2rem;
  margin-left: 10rem;
}

ul {
  list-style-type: none;
}

li {
  padding: 0 2rem;
  font-family: "Abel", sans-serif;
  font-size: 2rem;
  color: black;
  transition: all 0.2s;
}
li:hover {
  font-size: 2.5rem;
  transform: translateZ(5px);
  font-weight: 700;
}


.toggle-icon {
  font-size: 4rem;
  margin: 3rem;
  cursor: pointer;
}



@media (max-width: 1230px) {
  .container {
    display: none;
  }
  .heading {
    font-size: 4rem;
  }
  .toggle-icon {
    font-size: 3rem;
  }
}

@media (max-width: 900px) {
  .container {
    display: none;
  }
}

@media (max-width: 425px) {
  .container {
    display: none;
  }

  .toggle-icon {
    font-size: 2rem;
  }

  .heading {
    font-size: 2rem;
    padding-top: 0.8rem;
  }

}

`

export default Navbar
