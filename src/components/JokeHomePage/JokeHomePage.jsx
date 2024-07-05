import "./JokeHomePageStyles.css";
import JokeNavbar from "./components/JokeNavbar/JokeNavbar";
import SideBar from "./components/SideBar/SideBar";
import JokeCardsContainer from "./components/JokeCardsContainer/JokeCardsContainer";

export default function JokeHomePage() {
  return (
    <section className="jokeHomePageContainer">
      <JokeNavbar />
      <div className="mainContent-container">
        <SideBar />
        <JokeCardsContainer />
      </div>
    </section>
  );
}
