import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Background from "./Components/Background";
import MainPage from "./Components/MainPage";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Background className="background-component">
        <Header className="header-component" />
        <MainPage className="mainpage-component">
          <Intro className="intro-component" />
          <hr/>
          <Project className="project-component"/>
          <Footer ClassName="footer-component" />
        </MainPage>
      </Background>
    </div>
  );
}

export default App;
