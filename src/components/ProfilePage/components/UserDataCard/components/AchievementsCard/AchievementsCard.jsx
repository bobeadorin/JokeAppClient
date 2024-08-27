import "./AchievementsCardStyles.css";
import { useContext } from "react";
import UserDataContext from "../../../../../../utility/userContext/userContext";

export default function AchievementsCard() {
  const userData = useContext(UserDataContext);

  return (
    <section className="AchievementsCardContainer">
      <div className="AchievementsCard-wrapper">
        <div className="AchievementsCardTitle">
          <h2>Achievements</h2>
        </div>
        <div className="achievementsIconsContainer"></div>
        <div className="userStatsContainer">
          <div className="userAssets">
            <img
              className="userAssetsIcons"
              src="\profilePageImgs\LikesIcon.png"
              alt=""
            />
            <p className="userAssets_values">
              {userData !== null ? userData.likes : "nu merge"}
            </p>
          </div>
          <div className="userAssets">
            <img
              className="userAssetsIcons"
              src="\profilePageImgs\FollowersIcon.png"
              alt=""
            />
            <p className="userAssets_values">
              {userData !== null ? userData.followersNumber : "nu merge"}
            </p>
          </div>
          <div className="userAssets">
            <img
              className="userAssetsIcons"
              src="\profilePageImgs\PostsIcon.png"
              alt=""
            />
            <p className="userAssets_values">
              {userData !== null ? userData.postsNumber : "nu merge"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
