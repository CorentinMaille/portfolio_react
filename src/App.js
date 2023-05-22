import ecureuil from "./ecureuil.jpg";
import React from "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ecureuil} className="App-logo" alt="logo" />
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Hola Mundo !!!! Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
