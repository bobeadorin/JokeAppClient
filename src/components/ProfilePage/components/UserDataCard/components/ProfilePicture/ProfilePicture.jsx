import "./ProfilePictureStyles.css";

export default function ProfilePicture() {
  return (
    <section className="profilePictureSection-container">
      <div className="followProfileIcon-container">
        <img
          className="followProfileIcon"
          src="\profilePageImgs\FollowIcon.png"
          alt=""
        />
      </div>

      <div className="profilePicture-container">
        <img
          className="profileImg"
          src="\profilePageImgs\ProfileImg.png"
          alt=""
        />
      </div>
      <div className="UserNameAndStatusContainer">
        <h2>John Doe</h2>
        <p>Master Memer</p>
      </div>
    </section>
  );
}
