import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";

function App() {
  const navigateTo = (link) => {
    window.location.href = link;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Aprendendo React.js com a Tascom Academy.</p>
        <Button
          className="App-link"
          onClick={() => navigateTo("https://reactjs.org")}
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
