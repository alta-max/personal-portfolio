import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {

    return (<>
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
        </section></>
    )
}

export default Contact
