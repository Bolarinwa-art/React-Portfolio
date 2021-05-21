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
      <Background>
        <Header/>
        <MainPage>
          <Intro/>
          <hr/>
          <Project />
          <Footer />
        </MainPage>
      </Background>
    </div>
  );
}

export default App;
