import "./App.css";
import profilePic from "./../src/utils/images/eu.png";
import { ProfilePicStyle, Title, TitleBlock } from "./styled";
import LinksCard from "./Components/LinksCard/linksCards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePicStyle src={profilePic} className="profilePic" alt="logo" />
        <TitleBlock>
          <Title>
            Hey! I'm Marivone, the <b>@mothercoder!</b>
          </Title>
          <Title className="App-text-header"> These are all the links where you can find me:</Title>
        </TitleBlock>
        <section className="App-LinksCard-Position">
          <LinksCard />
        </section>
      </header>
      <section className="App-footer">
       <p className="App-text-footer">@2023 Marivone Araujo - Criado com React/JS, MUI and React
        Testing Library</p> 
      </section>
    </div>
  );
}

export default App;
