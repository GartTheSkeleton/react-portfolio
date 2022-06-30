import React from "react";
import Image from '../../assets/header-image-cheating.png';

function Nav() {

    return(
        <nav>
            <div className="navbar">
                <div className="header-link">Apps</div>
                <div className="header-link">Comics</div>
                <div className="header-link">About</div>
                <div className="header-link">Contact</div>
            </div>
            
            <div  className="header-wrapper" alt="">
                <img src={Image} alt=""></img>
            </div>
        </nav>
    )
}

export default Nav