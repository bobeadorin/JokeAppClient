import "./JokeProfileCardStyles.css";
import JokeCard from "../../../JokeHomePage/components/JokeCard/JokeCard";
import JokeCarousel from "../JokeCarousel/JokeCarousel";
import useRequestWithAuthCheck from "../../../../utility/hooks/useRequestWithAuthCheck";
import { getUserFavoriteJokes } from "../../../../utility/requests";
import { useEffect, useState } from "react";

export default function JokeProfileCard() {
  const { data, isLoading, errorData } =
    useRequestWithAuthCheck(getUserFavoriteJokes);
  const [spotlightJokeData, setSpotlightJokeData] = useState(null);
  const [dataIndex, setdataIndex] = useState(0);

  useEffect(() => {
    if (!isLoading && data) {
      setSpotlightJokeData({
        isFavorite: false,
        isLiked: false,
        joke: data[dataIndex],
      });
    }
  }, [isLoading, data, dataIndex]);

  const handleIndexIncrement = () => {
    if (dataIndex === data.length - 1) return;
    setdataIndex((prev) => prev + 1);
  };
  const handleIndexDecrement = () => {
    if (dataIndex === 0) return;
    setdataIndex((prev) => prev - 1);
  };

  if (isLoading || !data || errorData) return <div>Loading...</div>;

  return (
    <section className="jokeProfileCard-wrapper">
      <div className="topHeader">
        <h1>Jokes</h1>
        <img
          className="profileCategoryJoke"
          src="/profilePageImgs/JokeProfileIcon.png"
          alt="jokeLogo"
        />
      </div>
      <div className="JokeCarouselAndSpotlightCard-container">
        <div className="spotlightCard-container">
          <img
            src="/profilePageImgs/ArrowIconProfileJokeCarousel.png"
            className="leftArrow-Spotlight spotlightArrow"
            alt="left arrow"
            onClick={handleIndexDecrement}
          />
          {spotlightJokeData ? (
            <JokeCard
              jokeConfig={{
                ...spotlightJokeData,
                size: "L",
              }}
            />
          ) : (
            <div>Not working</div>
          )}
          <img
            src="/profilePageImgs/ArrowIconProfileJokeCarousel.png"
            className="rightArrow-Spotlight spotlightArrow"
            alt="right arrow"
            onClick={handleIndexIncrement}
          />
        </div>
        <JokeCarousel data={{ jokes: data }} />
      </div>
    </section>
  );
}
