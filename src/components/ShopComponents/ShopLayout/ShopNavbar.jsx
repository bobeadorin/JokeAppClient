import "./ShopNavbarStyles.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../utility/AuthContext/authContext";

export default function ShopNavbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="shopNavbar">
      <img
        src="\jokeHomePageImages\jokeNavbarImgs\shopLogoNavbar.png"
        alt="jokeLogo"
        className="shopNavbarLogo navbarItems"
        onClick={() => navigate("/shop")}
      />
      <img
        src="\jokeHomePageImages\jokeNavbarImgs\middleLogoNavbar.png"
        alt=""
        className="jokeMiddleLogo navbarItems"
      />

      <div className="routesContainer">
        <img
          src="\jokeHomePageImages\jokeNavbarImgs\jokeLogoNavbar.png"
          alt=""
          className="shopLogo navbarItems"
          onClick={() => navigate("/jokes")}
        />
        <img
          src="\shopHomePageImages\shopNavbarLogo\ShopCartLogo.png"
          className="navbarItems"
          alt=""
          onClick={() => navigate("/shopCart")}
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
