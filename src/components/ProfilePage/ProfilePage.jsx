import "./ProfilePageStyles.css";
import UserDataCard from "./components/UserDataCard/UserDataCard";
import JokeProfileCard from "./components/JokeProfileCard/JokeProfileCard";
import StoreProfileCard from "./components/StoreCard/StoreProfileCard";
import { useState, useEffect } from "react";
import useUserData from "../../utility/hooks/useUserData";
import UserDataContext from "../../utility/userContext/userContext";
import api from "../../utility/axiosConfig/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [isShop, setIsShop] = useState(false);
  // const { data, error } = useUserData();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      const res = await api.get("/getUser", {
        withCredentials: true,
      });
      setData(res.data);
    };

    const useUserData = async () => {
      try {
        await getUserData();
      } catch (error) {
        const res = await refresh();
        if (res === 200) {
          console.log("refersh works");
          navigate("/jokes/profile");
        }
        if (res === 401) {
          console.log("refersh doenst works");

          navigate("/login");
        }
      }
    };

    const refresh = async () => {
      try {
        const res = await api.get("/refresh", {
          withCredentials: true,
        });
        console.log("refersh");

        return res.status;
      } catch (error) {
        console.log(error);
      }
    };

    useUserData();
  }, []);

  if (data === null) return <h1>not working</h1>;

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
