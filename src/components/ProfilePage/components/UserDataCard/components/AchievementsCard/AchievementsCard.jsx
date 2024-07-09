import "./AchievementsCardStyles.css";

export default function AchievementsCard() {
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
            <p className="userAssets_values">12</p>
          </div>
          <div className="userAssets">
            <img
              className="userAssetsIcons"
              src="\profilePageImgs\FollowersIcon.png"
              alt=""
            />
            <p className="userAssets_values">23</p>
          </div>
          <div className="userAssets">
            <img
              className="userAssetsIcons"
              src="\profilePageImgs\PostsIcon.png"
              alt=""
            />
            <p className="userAssets_values">23</p>
          </div>
        </div>
      </div>
    </section>
  );
}
