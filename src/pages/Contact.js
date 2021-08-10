import React from 'react'
import styled from 'styled-components'

const Contact = () => {

    return (<Wrapper>
        <section className="contact">
            <div className="contact-container">

                <div className="extra">
                    <h1>Get in touch with me</h1>
                    <div className="form-container">
                        <form action="https://formspree.io/f/xknkvkvq" method="POST" className="contact-form" >

                            {/* <input id="name" type="text" placeholder="Enter your Name" /> */}

                            <input name="_replyto" id="email" type="email" placeholder="Enter your Email here" />

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                className="form-control"
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>

                    </div>
                    <h2>I am also active on</h2>
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
                </div>


                <div className="contact-image">
                    <i class="fas fa-mail-bulk"></i>
                </div>
            </div>
        </section>
    </Wrapper>
    )
}

const Wrapper = styled.section`
h1{
    font-size: 2rem;
}
.contact {
  height: 75vh;
  text-align: center;
  font-family: "Encode Sans SC", sans-serif;
  margin-top: 5rem;
}

.contact-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.contact h2 {
  font-size: 1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30rem;
  /* background-color: orangered; */
  margin: 0 auto;
  height: 20rem;
  padding: 2rem;
}

.contact-form input {
  padding: 0.5rem;
  font-family: "Montserrat", sans-serif;
  border: 2px solid;
}

.contact-form textarea {
  font-family: "Montserrat", sans-serif;
  padding: 0.5rem;
  border: 2px solid;
}

.contact-form button {
  padding: 0.5rem;
  font-family: "Encode Sans SC", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  background-color: #fff;
}

.contact-image {
  font-size: 25rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.form-container {
  margin-left: 2rem;
  margin-right: 2rem;
}

@media (max-width: 900px) {
  .contact-image {
    display: none;
  }

  .contact-form input {
    padding: 1rem;
    margin: 1rem;
  }

  .contact-form textarea {
    padding: 2rem;
    margin: 1rem;
  }

  .form-container {
    margin: 4rem;
  }

  .footer-socials {
    padding-bottom: 5rem;
  }
}

@media (max-width: 1230px) {
  .contact {
    height: 100%;
  }
  .contact-image {
    font-size: 15rem;
  }
}
@media (max-width: 425px) {
  .contact {
    height: 100%;
    padding: 2rem;
  }
  .contact-container {
    flex-direction: column;
  }
  .contact-form {
    width: 20rem;
  }
}

`

export default Contact
