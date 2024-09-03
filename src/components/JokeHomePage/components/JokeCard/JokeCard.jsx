/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { jokeCardData, userActionsImgPaths } from "../../../../utility/routes";
import {
  smallScaleCardStyles,
  largeScaleCardStyles,
  defaultCardStyles,
} from "../../../../utility/jokeCardCustomStyles";

import "./JokeCardStyles.css";
import { useNavigate } from "react-router-dom";
import { addJokeToFavorite, likeJoke } from "../../../../utility/requests";
import useOnClickRequestWithAuthCheck from "../../../../utility/hooks/useOnClickRequestWithAuthCheck";

export default function JokeCard({ jokeConfig }) {
  const [cardAssets, setCardAssets] = useState("");
  const [isLiked, setIsLiked] = useState(jokeConfig.item.isLiked);
  const [isFavorite, setIsFavorite] = useState(jokeConfig.item.isFavorite);
  const [action, setAction] = useState({
    method: addJokeToFavorite,
    params: jokeConfig.item.joke.id,
  });
  const [cardStyles, setCardStyles] = useState(defaultCardStyles);
  const { handleRequest } = useOnClickRequestWithAuthCheck(
    action.method,
    action.params
  );
  const navigate = useNavigate();

  const handleLikeOnClick = async () => {
    setAction({
      method: likeJoke,
      params: jokeConfig.item.joke.id,
    });
    console.log(action, "action");
    setIsLiked(!isLiked);
    await handleRequest();
  };

  const handleUserProfileRedirect = (username) => {
    navigate(`/jokes/profile/${username}`);
  };

  const handleFavoriteOnClick = async () => {
    setAction({
      method: addJokeToFavorite,
      params: jokeConfig.item.joke.id,
    });
    console.log(action, "action");

    setIsFavorite(!isFavorite);
    await handleRequest();
  };

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    console.log(jokeConfig, "asdads");
    switch (jokeConfig.item.joke.category) {
      case "Cat":
        setCardAssets(jokeCardData.cat);
        break;
      case "Programming":
        setCardAssets(jokeCardData.programming);
        break;
      case "Dirty":
        setCardAssets(jokeCardData.dirty);
        break;
      case "Horror":
        setCardAssets(jokeCardData.horror);
        break;
      case "Knock":
        setCardAssets(jokeCardData.knock);
        break;
    }
  }, []);

  useEffect(() => {
    switch (jokeConfig.size) {
      case "S":
        setCardStyles(smallScaleCardStyles);
        break;
      case "L":
        setCardStyles(largeScaleCardStyles);
        break;
      default:
        setCardStyles(defaultCardStyles);
        break;
    }
  }, []);

  return (
    <section className={cardStyles.jokeCardContainer}>
      <div className={cardStyles.jokeTopSideContainer}>
        <img
          className={cardStyles.jokeCardTopIcon}
          src={cardAssets.categoryTopLogoPath}
          alt=""
        />
        <img
          className={cardStyles.jokeCardCategoryBubble}
          src={cardAssets.categoryBubblePath}
          alt=""
        />
        <img
          className={cardStyles.jokeCardBg}
          src={cardAssets.categoryBgPath}
          alt=""
        />
      </div>
      <div>
        <div className={cardStyles.jokeText}>
          <p className={cardStyles.firstJokePart}>
            {jokeConfig.item.joke.text}
          </p>
          {/* <p className={cardStyles.jokePunchLine}>{jokeConfig.type.text}</p> */}
        </div>
      </div>
      <div
        style={{ backgroundColor: `${cardAssets.bgColor}` }}
        className={cardStyles.jokeCardUserActionContainer}
      >
        <div
          onClick={() =>
            handleUserProfileRedirect(jokeConfig.item.joke.authorUsername)
          }
          className="jokeAuthor"
        >
          <img
            className="jokeCardAuthor-Img"
            src="/profilePageImgs/ProfileImg.png"
          />
          <p className="joke-AuthorUsername">
            {jokeConfig.item.joke.authorUsername}
          </p>
        </div>
        <div className="action-container">
          <img
            src={
              isFavorite
                ? userActionsImgPaths.favorite.active
                : userActionsImgPaths.favorite.inactive
            }
            alt=""
            onClick={() => handleFavoriteOnClick()}
            className={cardStyles.favoriteIcon}
          />
          <img
            src={
              isLiked
                ? userActionsImgPaths.like.active
                : userActionsImgPaths.like.inactive
            }
            alt=""
            onClick={() => handleLikeOnClick()}
            className={cardStyles.likeIcon}
          />
        </div>
      </div>
    </section>
  );
}
