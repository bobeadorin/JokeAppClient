import { useEffect, useState } from "react";
import { jokeCardData, userActionsImgPaths } from "../../../../utility/routes";
import "./JokeCardStyles.css";

export default function JokeCard({ jokeConfig }) {
  const [cardAssets, setCardAssets] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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
        console.log(cardAssets);
        break;
      case "proggraming":
        setCardAssets(jokeCardData.proggraming);
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

  return (
    <section className="jokeCard-container">
      <div className="jokeTopSideContainer">
        <img
          className="jokeCardTopIcon"
          src={cardAssets.categoryTopLogoPath}
          alt=""
        />
        <img
          className="jokeCardCategoryBubble"
          src={cardAssets.categoryBubblePath}
          alt=""
        />
        <img className="jokeCardBg" src={cardAssets.categoryBgPath} alt="" />
      </div>
      <div>
        <div className="jokeText">
          <p className="firstJokePart">
            Why did the proggramer wanted glasses?
          </p>
          <p className="jokePunchLine">So he can C#!</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: `${cardAssets.bgColor}` }}
        className="jokeCardUserAction-container"
      >
        <img
          src={
            isFavorite
              ? userActionsImgPaths.favorite.active
              : userActionsImgPaths.favorite.inactive
          }
          alt=""
          onClick={() => handleFavoriteOnClick()}
          className="favoriteIcon"
        />
        <img
          src={
            isLiked
              ? userActionsImgPaths.like.active
              : userActionsImgPaths.like.inactive
          }
          alt=""
          onClick={() => handleLikeOnClick()}
          className="likeIcon"
        />
      </div>
    </section>
  );
}
