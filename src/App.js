import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import NavWrapper from './components/HeaderWrapper'

import Body from './components/Body'

import FooterImage from './assets/footer-image.png'
import FooterImage2 from './assets/footer-image2.png'

function App() {
  
  const [currentSection, setCurrentSection] = useState(1);

  return (
    <div className="App">
        <Header></Header>
        <nav>
            <div className="navbar">
                <div className="header-link" onClick={() => {setCurrentSection(0)}}>Portfolio</div>
                <div className="header-link" onClick={() => {setCurrentSection(1)}}>About Me</div>
                <div className="header-link" onClick={() => {setCurrentSection(2)}}>Resume</div>
                <div className="header-link" onClick={() => {setCurrentSection(3)}}>Contact</div>
            </div>
        </nav>
        <NavWrapper></NavWrapper>

        <Body state={currentSection}></Body>


        <footer>
          <a href="https://www.instagram.com/graphitepages/">
            <img src={FooterImage} alt=""></img>
          </a>
          <a href="https://www.instagram.com/graphitepages/">
            <img src={FooterImage2} alt=""></img>
          </a>
          
        </footer>
    </div>
  );
}

export default App;
