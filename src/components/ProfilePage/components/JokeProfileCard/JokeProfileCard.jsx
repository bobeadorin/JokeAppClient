import "./JokeProfileCardStyles.css";
import JokeCard from "../../../JokeHomePage/components/JokeCard/JokeCard";
import JokeCarousel from "../JokeCarousel/JokeCarousel";

export default function JokeProfileCard() {
  return (
    <section className="jokeProfileCard-wrapper">
      <div className="topHeader">
        <h1>Jokes</h1>
        <img
          className="profileCategoryJoke"
          src="\profilePageImgs\JokeProfileIcon.png"
          alt="jokeLogo"
        />
      </div>
      <div className="JokeCarouselAndSpotlightCard-container">
        <div className="spotlightCard-container">
          <img
            src="\profilePageImgs\ArrowIconProfileJokeCarousel.png"
            className="leftArrow-Spotlight spotlightArrow"
            alt=""
          />
          <JokeCard
            jokeConfig={{
              type: "cat",
              size: "L",
            }}
          />
          <img
            src="\profilePageImgs\ArrowIconProfileJokeCarousel.png"
            className="rightArrow-Spotlight spotlightArrow"
            alt=""
          />
        </div>
        <JokeCarousel />
      </div>
    </section>
  );
}
