import logo from "./logo.svg";
import "./App.css";
import Destructuring from "./Components/destructuring.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Destructuring</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-es6-destructuring"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <Destructuring />
      </header>
    </div>
  );
}

export default App;
