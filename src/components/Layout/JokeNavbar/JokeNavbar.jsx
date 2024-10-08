import "./JokeNavbarStyles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../utility/AuthContext/authContext";

export default function JokeNavbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="jokeNavbar">
      <img
        src="\jokeHomePageImages\jokeNavbarImgs\jokeLogoNavbar.png"
        alt="jokeLogo"
        className="jokeNavbarLogo navbarItems"
        onClick={() => navigate("/jokes")}
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
          onClick={() => navigate("/shop")}
        />

        <div className="profileLogoContainer">
          {isLoggedIn ? (
            <img
              src="\jokeHomePageImages\jokeNavbarImgs\profileLogoNavbar.png"
              alt=""
              className="profileLogo navbarItems"
            />
          ) : (
            <button
              className="loginBtn-navbar"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}

          {isLoggedIn && (
            <div className="dropdownMenu">
              <button onClick={() => navigate("/jokes/profile")}>
                Profile
              </button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
