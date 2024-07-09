import "./JokeHomePageStyles.css";
import SideBar from "./components/SideBar/SideBar";
import JokeCardsContainer from "./components/JokeCardsContainer/JokeCardsContainer";

export default function JokeHomePage() {
  return (
    <section className="jokeHomePageContainer">
      <div className="mainContent-container">
        <SideBar />
        <JokeCardsContainer />
      </div>
    </section>
  );
}
