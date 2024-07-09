import "./JokeNavbarStyles.css";
import { useNavigate } from "react-router-dom";

export default function JokeNavbar() {
  const navigate = useNavigate();

  return (
    <div className="jokeNavbar">
      <img
        src="\jokeHomePageImages\jokeNavbarImgs\jokeLogoNavbar.png"
        alt="jokeLogo"
        className="jokeNavbarLogo navbarItems"
        onClick={() => navigate("/")}
      />
      <img
        src="\jokeHomePageImages\jokeNavbarImgs\middleLogoNavbar.png"
        alt=""
        className="jokeMiddleLogo navbarItems"
      />
      <div className="routesContainer">
        <img
          src="\jokeHomePageImages\jokeNavbarImgs\shopLogoNavbar.png"
          alt=""
          className="shopLogo navbarItems"
        />
        <img
          src="\jokeHomePageImages\jokeNavbarImgs\profileLogoNavbar.png"
          alt=""
          className="profileLogo navbarItems"
          onClick={() => navigate("/jokes/profile")}
        />
      </div>
    </div>
  );
}
