import "./HomePageStyles.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleOnClickNavigate = (path) => {
    if (path === "jokes") navigate("/jokes");
    if (path === "store") navigate("/store");
  };

  return (
    <div className="homePage-container">
      <section className="jokesSidePannel">
        <img
          className="jokeLogo"
          src="\homePageImages\jokeLogo.png"
          alt=""
          onClick={() => handleOnClickNavigate("jokes")}
        />
        <img
          className="topJokeChracter"
          src="\homePageImages\topJokeCharacter.png"
          alt="jokeLogo"
        />
        <img
          className="bottomJokeCharacters"
          src="\homePageImages\bottomJokeCharacters.png"
          alt=""
        />
        <img
          className="middleArrows"
          src="\homePageImages\arrowSign.png"
          alt=""
        />
      </section>
      <section className="shopSidePannel">
        <img
          className="shopSideRoof"
          src="\homePageImages\shopSideRoof.png"
          alt=""
        />
        <img
          src="\homePageImages\shopSideGif.gif"
          className="shopLogoAnimation"
          alt="shopLogo"
          onClick={() => handleOnClickNavigate("store")}
        />
      </section>
    </div>
  );
}
