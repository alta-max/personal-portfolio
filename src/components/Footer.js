import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (<Wrapper>

        <footer className="footer">
            <div className="footer-heading">
                Altamash Sayed
            </div>
            <div className="footer-socials">

                <a href="https://www.facebook.com/profile.php?id=100010723273810">
                    <i class="fab fa-facebook-f footer-icons"></i>
                </a>

                <a href="https://www.instagram.com/alps_sayed/">
                    <i class="fab fa-instagram footer-icons"></i>
                </a>

                <a href="https://twitter.com/Altamash_sayed_">
                    <i class="fab fa-twitter footer-icons"></i>
                </a>

                <a href="https://www.linkedin.com/in/altamash-sayed-3954b1194/">
                    <i class="fab fa-linkedin-in footer-icons"></i>
                </a>

                <a href="https://github.com/alta-max">
                    <i class="fab fa-github footer-icons"></i>
                </a>
            </div>
            <div className="footer-text">
                All rights reserved
            </div>
        </footer>
    </Wrapper>
    )
}

const Wrapper = styled.footer`
.footer {
  text-align: center;
  padding: 5rem;
}

.footer-heading {
  font-family: "Sacramento", cursive;
  font-size: 2rem;
  font-weight: 550;
}

.footer-text {
  font-family: "Abel", sans-serif;
}

.footer-socials {
  font-size: 1.5rem;
  padding: 1rem 0;
}



@media (max-width: 425px) {
  .footer {
    padding: 1rem;
  }
}

`

export default Footer
