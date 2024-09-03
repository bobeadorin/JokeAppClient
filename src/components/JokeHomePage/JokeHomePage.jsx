import "./JokeHomePageStyles.css";
import SideBar from "./components/SideBar/SideBar";
import JokeCardsContainer from "./components/JokeCardsContainer/JokeCardsContainer";
import JokeInputCard from "./components/JokeInputCard/JokeInputCard";

export default function JokeHomePage() {
  return (
    <section className="jokeHomePageContainer">
      <div className="mainContent-container">
        <SideBar />
        <div className="JokeCardsContainer">
          <div className="JokeCardsBgContainer">
            <JokeInputCard />
            <JokeCardsContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
