import './App.css';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';
import NavWrapper from './components/HeaderWrapper'
import Apps from './components/Apps'
import Resume from './components/Resume'
import Contact from './components/Contact';

import FooterImage from './assets/footer-image.png'
import FooterImage2 from './assets/footer-image2.png'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Nav></Nav>
        <NavWrapper></NavWrapper>

        <Contact></Contact>
        <Resume></Resume>
        <Apps></Apps>
        <About></About>

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
