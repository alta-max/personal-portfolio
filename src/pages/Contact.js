import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (<>
        <section className="contact">
            <div className="contact-container">

                <div className="extra">
                    <h1>Get in touch with me</h1>
                    <div className="form-container">
                        <form action="" className="contact-form" onSubmit={handleSubmit}>

                            <input id="name" type="text" placeholder="Enter your Name" />

                            <input id="email" type="email" placeholder="Enter your Email here" />

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                className="form-control"
                            ></textarea>
                            <button type="submit">{status}</button>
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
