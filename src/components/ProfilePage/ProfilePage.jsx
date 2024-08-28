import "./ProfilePageStyles.css";
import UserDataCard from "./components/UserDataCard/UserDataCard";
import JokeProfileCard from "./components/JokeProfileCard/JokeProfileCard";
import StoreProfileCard from "./components/StoreCard/StoreProfileCard";
import { useEffect, useState } from "react";
import UserDataContext from "../../utility/userContext/userContext";
import useRequestWithAuthCheck from "../../utility/hooks/useRequestWithAuthCheck";
import api from "../../utility/axiosConfig/axiosConfig";

// Fetch user data function
const getUserData = async () => {
  try {
    const res = await api.get("/getUser", { withCredentials: true });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export default function ProfilePage() {
  const [isShop, setIsShop] = useState(false);
  const { data, isLoading } = useRequestWithAuthCheck(getUserData); // Use hook to fetch data

  if (isLoading) {
    return <h1>Loading...</h1>; // Loading state
  }

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
