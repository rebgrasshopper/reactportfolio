import React from "react";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.png";

function Contact() {
    return (
        <section className='main'>
            <div className="container">
                <div className="row">
                    <header className="col-12"><h2>Contact</h2></header>
                    <hr />


                    <div id='social-media-header'><p>Catch me at: </p></div>
                </div>
                <div className="button-row">
                    <div className="">
                        <button id="github" className="btn btn-info"><a href="https://github.com/rebgrasshopper" target="_blank" rel="noreferrer"><img src={github} alt="GitHub icon" /></a></button>
                    </div>
                    <div className="">
                        <button id="linkedin" className="btn btn-info"><a href="https://www.linkedin.com/in/plover-brown-37b6981a5/" target="_blank" rel="noreferrer" ><img src={linkedin} alt="linkedIn icon" /></a></button>
                    </div>
                    <div className="">
                        <button id="email" className="btn btn-info"><a href="mailto: rellwoos@gmail.com"><img src={email} alt="email icon" /></a></button>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Contact;