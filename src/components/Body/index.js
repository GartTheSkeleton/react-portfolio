import React from 'react';
import Apps from '../Apps';
import Resume from '../Resume';
import Contact from '../Contact';
import About from '../About';

function Body(props){
    const state = props.state

    let renderAbout = true
    let renderContact = false
    let renderResume = false
    let renderApps = false
    console.log(state)

    if (state === 0)
        {
            renderAbout = false
            renderContact = false
            renderResume = false
            renderApps = true
        }
    if (state === 1)
        {
            renderAbout = true
            renderContact = false
            renderResume = false
            renderApps = false
        }
    if (state === 2)
        {
            renderAbout = false
            renderContact = false
            renderResume = true
            renderApps = false
        }
    if (state === 3)
        {
            renderAbout = false
            renderContact = true
            renderResume = false
            renderApps = false
        }
    
    return(
        <div>
            {renderContact ? (<Contact></Contact>):(<></>)}
            {renderApps ? (<Apps></Apps>):(<></>)}
            {renderResume ? (<Resume></Resume>):(<></>)}
            {renderAbout ? (<About></About>):(<></>)}
        </div>
    )
}

export default Body