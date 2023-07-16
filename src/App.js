import "./App.css";
import profilePic from "./../src/utils/images/eu.png";
import LinksCard from "./Components/LinksCard/linksCards";
import Button from "./Components/Button/button.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} alt="logo" className="ProfilePic-Style" />
        <div className="Title-Block">
          <p className="App-text-header">
            Oiê! Sou Marivone, a <b>@mothercoder!</b>
          </p>
          <section className="App-button">
            <Button />
          </section>
          <p className="App-text">
            {" "}
            Aqui estão todos os links aonde você pode me encontrar:
          </p>
        </div>
        <section className="App-LinksCard-Position">
          <LinksCard />
        </section>
      </header>
      <section className="App-footer">
        <p className="App-text-footer">
          @2023 Marivone Araujo - Created w React/JS, MUI & React Testing
          Library
        </p>
      </section>
    </div>
  );
}

export default App;
