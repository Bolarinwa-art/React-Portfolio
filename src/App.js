import "bootstrap/dist/css/bootstrap.min.css";
import {Nav} from "react-bootstrap";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Background from "./Components/Background";
import MainPage from "./Components/MainPage";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Background className="background-component">
        <Header className="header-component" />
        <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link>About Me</Nav.Link>
                </Nav.Item>  
            </Nav>
        <MainPage className="mainpage-component">
          <Intro className="intro-component" />
          <hr/>
          <Project className="project-component"/>
        </MainPage>
        <Footer ClassName="footer-component" />
      </Background>
    </div>
  );
}

export default App;
