import React from 'react';
import CodewirePic from '../../assets/codewire-app.png';
import WeatherInfoPic from '../../assets/weather-app.png';
import DndAppPic from '../../assets/dnd-app.png';
import GalaxyPic from '../../assets/galaxy-app.png';

function Apps() {
    return(
        <div className="body-element">
            <h2>Portfolio</h2>
            <p>The following are a selection of applications I have made or contributed to.</p>

            <div className='row gallery'>
                <a className='column' href='https://github.com/mattparker124/codewire'>
                    <h3>Codewire</h3>
                    <img src={CodewirePic} alt="" className='portfolio-pic' width={500}></img>
                </a>
                <a className='column' href='https://github.com/mattparker124/lords-of-the-table'>
                    <h3>Lords of the Table</h3>
                    <img src={DndAppPic} alt="" className='portfolio-pic' width={500}></img>
                </a>
            </div>

            <div className='row gallery'>
                <a className='column' href='https://github.com/GartTheSkeleton/Weather-Info-App'>
                    <h3>Weather Info App</h3>
                    <img src={WeatherInfoPic} alt="" className='portfolio-pic' width={500}></img>
                </a>
                <a className='column' href='https://github.com/mattparker124/lords-of-the-table'>
                    <h3>Galaxy Phage</h3>
                    <img src={GalaxyPic} alt="" className='portfolio-pic' width={500}></img>
                </a>
            </div>

            <div className='row gallery'>
                <a className='column' href='https://github.com/GartTheSkeleton/Weather-Info-App'>
                    <h3>Weather Info App</h3>
                    <img src={WeatherInfoPic} alt="" className='portfolio-pic' width={500}></img>
                </a>
                <a className='column' href='https://github.com/mattparker124/lords-of-the-table'>
                    <h3>Galaxy Phage</h3>
                    <img src={GalaxyPic} alt="" className='portfolio-pic' width={500}></img>
                </a>
            </div>
            


        </div>
        
    )
}

export default Apps