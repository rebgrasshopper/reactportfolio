import Me from "./images/squareMe.jpg";
import Resume from "./images/Plover Brown Full Stack Resume.pdf";



function About (){

    return (

        <section className='main'>
            <div className="container">
                <div className="row">
                    <header className="col-12"><h2>About Me</h2></header>
                </div>
                <hr>

                </hr>
                <div id="profile-info" className="row">
                    <div className="col-12">
                        <img id="profile-pic" src={Me} className="col-lg-4 col-md-6 col-sm-12 float-left" style={{borderRadius:8+"px"}} alt='A head shot of Plover Brown, a smiling white adult with brown hair, wearing a beanie and dressed in blue layered clothing for cool weather.' />
                        <p>Hey! I'm Plover Brown.</p>
                        <p>I'm a web developer working out of San Diego. These clear blue skies with picturesque, fluffy clouds are great inspiration for sharp, clean coding! I recommend it.</p>
                        <p>I've been working in Python on my own for the past year or so, but I'm always looking for something new to learn, I just completed the Full Stack Web Developer Bootcamp at UCSD Extensions! It was extremely fun. I got to become conversant in JavaScript, HTML, CSS, Node.js, rDBs and no-SQL databases, react, and more.</p>
                        <p>I come from an untraditional background, with a B.A. in studio art and sociology, so I've learned to keep my eyes and ears open for fresh and unusual opportunities. That's how I ended up coding while my four year old rampages around being a lightning-breathing dragon in the background.</p>
                        <p>My most recent project has been a classic text-based MUD, built from the ground up with a great team of coders! <a href="https://innattheedge.herokuapp.com/" target="_blank" rel="noreferrer">Inn At The Edge of Copyright</a> is currently on Version 1, and we're quite happy with our result from a 12 day sprint working together, but also eagerly looking forward to our next features. Working on a dedicated team is such a great time - probably my favorite part of coding!</p>

                        <button id="resume-button"><a href={Resume} target="_blank" rel="noopener noreferrer">Check out my resume</a>!</button>
                    </div>

                </div>
            </div>
        </section>
)
}

export default About;