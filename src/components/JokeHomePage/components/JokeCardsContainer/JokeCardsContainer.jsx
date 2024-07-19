import "./JokeCardsContainerStyles.css";
import JokeCard from "../JokeCard/JokeCard";
import JokeInputCard from "../JokeInputCard/JokeInputCard";

export default function JokeCardsContainer() {
  const arr = ["cat", "horror", "dirty", "programming", "knock"];
  return (
    <section className="JokeCardsContainer">
      <div className="JokeCardsBgContainer">
        <div className="cardsWrapper">
          <JokeInputCard />
          {arr.map((element) => (
            <JokeCard jokeConfig={{ type: element, size: "default" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
