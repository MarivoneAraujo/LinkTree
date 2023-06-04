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
          <Title>Hey! I'm Marivone, the <b>@mothercoder!</b></Title>
          <Title> These are all the links where you can find me:</Title>
        </TitleBlock>
        <LinksCard />
      </header>
    </div>
  );
}

export default App;
