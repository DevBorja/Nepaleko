import logo from "./logo.svg";
import "./assets/styles/App.css";
import "beercss";
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.add(isDarkMode ? "dark" : "light");
    document.body.classList.remove(isDarkMode ? "light" : "dark");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <nav class="left">
        <a>
          <i>home</i>
          <div>Home</div>
        </a>
        <a>
          <i>search</i>
          <div>Search</div>
        </a>
        <a>
          <i>share</i>
          <div>share</div>
        </a>
      </nav>
      <main class="responsive">
        <h3>Compact</h3>
        <article class="large-blur">
          <h5>Card</h5>
          <p>Some text here</p>
          <nav class="right-align">
            <button onClick={toggleTheme}>Tema</button>
          </nav>
        </article>
      </main>
    </div>
  );
}

export default App;
