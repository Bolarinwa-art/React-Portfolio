import Header from "./Components/Header";
import Background from "./Components/Background";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Background>
        <Header/>
      </Background>
    </div>
  );
}

export default App;
