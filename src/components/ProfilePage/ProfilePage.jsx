import "./ProfilePageStyles.css";
import UserDataCard from "./components/UserDataCard/UserDataCard";
import JokeProfileCard from "./components/JokeProfileCard/JokeProfileCard";
import StoreProfileCard from "./components/StoreCard/StoreProfileCard";
import { useState } from "react";

export default function ProfilePage() {
  const [isShop, setIsShop] = useState(false);

  return (
    <div className="profilePage-wrapper">
      <section className="profilePage-section">
        <UserDataCard />
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
