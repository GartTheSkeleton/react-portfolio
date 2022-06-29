import React from "react";
import profilePic from "../../assets/2022-gart.png";

function About() {

    return(
        <section>
            <h2>
                Who Am I?
            </h2>
            <img id="avatar" src={profilePic} width={250} height={250} alt="Cartoon Drawing of Garrett"></img>
            <p>
                Garrett Hobson is a Developer who has worked on both Web Apps and Video Games. Garrett is fluent in Javascript, is versed in technologies such as Node.js, Express, React, SQL and MongoDB.
            </p>
            <p>
                Garrett is also an illustrator who has worked on Comics, Branding Design and Video Games.    
            </p> 
            
        </section>
    )
}

export default About