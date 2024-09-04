import "./JokeProfileCardStyles.css";
import JokeCard from "../../../JokeHomePage/components/JokeCard/JokeCard";
import JokeCarousel from "../JokeCarousel/JokeCarousel";
import useRequestWithAuthCheck from "../../../../utility/hooks/useRequestWithAuthCheck";
import {
  getUserFavoriteJokes,
  getUserPostedJokes,
} from "../../../../utility/requests";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import UserDataContext from "../../../../utility/userContext/userContext";

export default function JokeProfileCard() {
  const { username } = useParams();
  const user = useContext(UserDataContext);
  const getDataFunc = username ? getUserPostedJokes : getUserFavoriteJokes;
  const getParams = username ? user.userData.id : null;

  const { data, isLoading, errorData } = useRequestWithAuthCheck(
    getDataFunc,
    getParams
  );
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
        <JokeCarousel
          data={{ jokes: data, index: dataIndex, setIndex: setdataIndex }}
        />
      </div>
    </section>
  );
}
