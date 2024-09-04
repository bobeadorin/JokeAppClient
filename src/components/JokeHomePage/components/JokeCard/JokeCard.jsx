/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
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

// Wrap the functional component with React.forwardRef
const JokeCard = React.forwardRef(({ jokeConfig }, ref) => {
  const [cardAssets, setCardAssets] = useState("");
  const [isLiked, setIsLiked] = useState(jokeConfig.isLiked);
  const [isFavorite, setIsFavorite] = useState(jokeConfig.isFavorite);
  const [cardStyles, setCardStyles] = useState(defaultCardStyles);
  const { handleRequest } = useOnClickRequestWithAuthCheck();
  const navigate = useNavigate();

  const handleLikeOnClick = async () => {
    setIsLiked(!isLiked);
    await handleRequest(likeJoke, jokeConfig.joke.id);
  };

  const handleUserProfileRedirect = (username) => {
    navigate(`/jokes/profile/${username}`);
  };

  const handleFavoriteOnClick = async () => {
    setIsFavorite(!isFavorite);
    await handleRequest(addJokeToFavorite, jokeConfig.joke.id);
  };

  useEffect(() => {
    switch (jokeConfig.joke.category) {
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
      default:
        setCardAssets(jokeCardData.default); // Add a default category if needed
        break;
    }
  }, [jokeConfig]);

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
  }, [jokeConfig.size]);

  return (
    <section className={cardStyles.jokeCardContainer} ref={ref}>
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
          <p className={cardStyles.firstJokePart}>{jokeConfig.joke.text}</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: `${cardAssets.bgColor}` }}
        className={cardStyles.jokeCardUserActionContainer}
      >
        <div
          onClick={() =>
            handleUserProfileRedirect(jokeConfig.joke.authorUsername)
          }
          className="jokeAuthor"
        >
          <img
            className="jokeCardAuthor-Img"
            src="/profilePageImgs/ProfileImg.png"
            alt=""
          />
          <p className="joke-AuthorUsername">
            {jokeConfig.joke.authorUsername}
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
});

export default JokeCard;
