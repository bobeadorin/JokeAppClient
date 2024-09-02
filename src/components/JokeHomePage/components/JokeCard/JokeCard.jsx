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

export default function JokeCard({ jokeConfig }) {
  const [cardAssets, setCardAssets] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cardStyles, setCardStyles] = useState(defaultCardStyles);
  const navigate = useNavigate();

  const handleLikeOnClick = () => {
    setIsLiked(!isLiked);
  };
  const handleUserProfileRedirect = (username) => {
    navigate(`/jokes/profile/${username}`);
  };
  const handleFavoriteOnClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    switch (jokeConfig.type.category) {
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
          <p className={cardStyles.firstJokePart}>{jokeConfig.type.text}</p>
          {/* <p className={cardStyles.jokePunchLine}>{jokeConfig.type.text}</p> */}
        </div>
      </div>
      <div
        style={{ backgroundColor: `${cardAssets.bgColor}` }}
        className={cardStyles.jokeCardUserActionContainer}
      >
        <div
          onClick={() =>
            handleUserProfileRedirect(jokeConfig.type.authorUsername)
          }
          className="jokeAuthor"
        >
          <img
            className="jokeCardAuthor-Img"
            src="/profilePageImgs/ProfileImg.png"
          />
          <p className="joke-AuthorUsername">
            {jokeConfig.type.authorUsername}
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
