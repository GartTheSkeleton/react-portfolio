import './App.css';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';
import NavWrapper from './components/HeaderWrapper'

import FooterImage from './assets/footer-image.png'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Nav></Nav>
        <NavWrapper></NavWrapper>
        <About></About>

        <footer>
          <a href="https://www.instagram.com/graphitepages/">
            <img src={FooterImage} alt=""></img>
          </a>
          
        </footer>
    </div>
  );
}

export default App;
