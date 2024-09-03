/* eslint-disable no-useless-catch */
import "./ExternalProfilePageStyles.css";
import UserDataCard from "../ProfilePage/components/UserDataCard/UserDataCard";
import JokeProfileCard from "../ProfilePage/components/JokeProfileCard/JokeProfileCard";
import UserDataContext from "../../utility/userContext/userContext";
import useRequestWithAuthCheck from "../../utility/hooks/useRequestWithAuthCheck";
import { getUserByUsername } from "../../utility/requests";
import { useParams } from "react-router-dom";

// Fetch user data function

export default function ExternalProfilePage() {
  const { username } = useParams();
  const { data, isLoading } = useRequestWithAuthCheck(
    getUserByUsername,
    username
  );
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="profilePage-wrapper">
      <section className="profilePage-section">
        <UserDataContext.Provider value={data}>
          <UserDataCard />
        </UserDataContext.Provider>
        <JokeProfileCard />
      </section>
    </div>
  );
}
