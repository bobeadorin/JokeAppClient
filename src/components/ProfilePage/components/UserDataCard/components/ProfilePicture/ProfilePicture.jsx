import { useState, useContext, useEffect } from "react";
import "./ProfilePictureStyles.css";
import UserDataContext from "../../../../../../utility/userContext/userContext";

export default function ProfilePicture() {
  const [isFollowed, setIsFollwed] = useState();
  const userData = useContext(UserDataContext);

  const handleOnClickFollowEvent = () => {
    setIsFollwed(!isFollowed);
  };

  return (
    <section className="profilePictureSection-container">
      <div className="followProfileIcon-container">
        <img
          className={isFollowed ? "followedProfileIcon" : "followProfileIcon"}
          src={
            isFollowed
              ? "/profilePageImgs/FollowedIcon.png"
              : "/profilePageImgs/FollowIcon.png"
          }
          alt=""
          onClick={handleOnClickFollowEvent}
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
        <h2>{userData !== null ? userData.username : "nu merge"}</h2>
        <p>Master Memer</p>
      </div>
    </section>
  );
}
