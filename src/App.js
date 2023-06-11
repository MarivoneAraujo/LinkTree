import "./App.css";
import profilePic from "./../src/utils/images/eu.png";
import LinksCard from "./Components/LinksCard/linksCards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} alt="logo" className="ProfilePic-Style" />
        <div className="Title-Block">
          <p className="App-text-header">
            Hey! I'm Marivone, the <b>@mothercoder!</b>
          </p>
          <p className="App-text">
            {" "}
            These are all the links where you can find me:
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
