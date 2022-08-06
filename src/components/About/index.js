import React from "react";
import profilePic from "../../assets/2022-gart.png";

function About() {

    return(
        <section className="body-element">
            <h2>
                Who Am I?
            </h2>
            <img id="avatar" src={profilePic} width={250} height={250} alt="Cartoon Drawing of Garrett"></img>
            <p className="aboutText">
                I am a Developer who has worked on both Web Apps and Video Games. I'm fluent in Javascript, CSS and HTML. I'm versed in technologies such as Node.js, Express, React, MySQL and MongoDB.
            </p>
            <p className="aboutText">
                I am also an Illustrator/Designer who has worked on Comics, Branding Design and Video Games.    
            </p> 
            
        </section>
    )
}

export default About