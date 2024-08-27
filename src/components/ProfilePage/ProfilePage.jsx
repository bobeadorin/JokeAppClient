import "./ProfilePageStyles.css";
import UserDataCard from "./components/UserDataCard/UserDataCard";
import JokeProfileCard from "./components/JokeProfileCard/JokeProfileCard";
import StoreProfileCard from "./components/StoreCard/StoreProfileCard";
import { useState, useEffect } from "react";
import useUserData from "../../utility/hooks/useUserData";
import UserDataContext from "../../utility/userContext/userContext";

export default function ProfilePage() {
  const [isShop, setIsShop] = useState(false);
  const { data, error } = useUserData();

  if (error) return <h1>not working</h1>;

  return (
    <div className="profilePage-wrapper">
      <section className="profilePage-section">
        <UserDataContext.Provider value={data}>
          <UserDataCard />
        </UserDataContext.Provider>
        {isShop ? <StoreProfileCard /> : <JokeProfileCard />}

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
