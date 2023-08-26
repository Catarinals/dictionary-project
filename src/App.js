import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <span>
            {" "}
            <h4>Pocket Dictionary</h4>
            <img src={logo} className="App-logo img-fluid" alt="logo" />
          </span>
        </header>
        <main className="dictionary">
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>Coded by Catarina Santos</small>
        </footer>
      </div>
    </div>
  );
}
