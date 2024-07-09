import "./UserDataCardStyles.css";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import AchievementsCard from "./components/AchievementsCard/AchievementsCard";

export default function UserDataCard() {
  return (
    <section className="userProfileDataCardContainer">
      <ProfilePicture />
      <AchievementsCard />
    </section>
  );
}
