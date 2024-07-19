import { useEffect, useState } from "react";
import { jokeCardData, userActionsImgPaths } from "../../../../utility/routes";
import {
  smallScaleCardStyles,
  largeScaleCardStyles,
  defaultCardStyles,
} from "../../../../utility/jokeCardCustomStyles";

import "./JokeCardStyles.css";

export default function JokeCard({ jokeConfig }) {
  const [cardAssets, setCardAssets] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cardStyles, setCardStyles] = useState(defaultCardStyles);

  const handleLikeOnClick = () => {
    setIsLiked(!isLiked);
  };
  const handleFavoriteOnClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    switch (jokeConfig.type) {
      case "cat":
        setCardAssets(jokeCardData.cat);
        break;
      case "programming":
        setCardAssets(jokeCardData.programming);
        break;
      case "dirty":
        setCardAssets(jokeCardData.dirty);
        break;
      case "horror":
        setCardAssets(jokeCardData.horror);
        break;
      case "knock":
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
        console.log(cardStyles);
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
            Why did the programmer wanted glasses?
          </p>
          <p className={cardStyles.jokePunchLine}>So he can C#!</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: `${cardAssets.bgColor}` }}
        className={cardStyles.jokeCardUserActionContainer}
      >
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
    </section>
  );
}
