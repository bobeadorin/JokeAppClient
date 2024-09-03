/* eslint-disable no-useless-catch */
import "./ProfilePageStyles.css";
import UserDataCard from "./components/UserDataCard/UserDataCard";
import JokeProfileCard from "./components/JokeProfileCard/JokeProfileCard";
import StoreProfileCard from "./components/StoreCard/StoreProfileCard";
import { useState, useContext } from "react";
import UserDataContext from "../../utility/userContext/userContext";
import useRequestWithAuthCheck from "../../utility/hooks/useRequestWithAuthCheck";
import { getUserData } from "../../utility/requests";
import { AuthContext } from "../../utility/AuthContext/authContext";

export default function ProfilePage() {
  const [isShop, setIsShop] = useState(false);
  const { data, isLoading } = useRequestWithAuthCheck(getUserData); // Use hook to fetch data
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoading) {
    return <h1 style={{ height: "100%" }}>Loading...</h1>; // Loading state
  }

  if (isLoggedIn === false) {
    return <h1 style={{ height: "100%" }}>Not logged</h1>;
  }
  return (
    <div className="profilePage-wrapper">
      <section className="profilePage-section">
        <UserDataContext.Provider value={data}>
          <UserDataCard />
        </UserDataContext.Provider>
        {/* {isShop ? <StoreProfileCard /> : <JokeProfileCard />} */}

        <div className="sectionSelector">
          <div className="jokeSelector" onClick={() => setIsShop(false)}>
            <img
              className="JokeLogoSelector"
              src="\profilePageImgs\JokeProfileIcon.png"
              alt="jokeLogo"
            />
          </div>
          <div className="shopSelector" onClick={() => setIsShop(true)}>
            <img
              className="ShopLogoSelector"
              src="\profilePageImgs\ShopCartIcon.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
