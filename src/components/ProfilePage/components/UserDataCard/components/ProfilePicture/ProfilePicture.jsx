import { useState, useContext } from "react";
import "./ProfilePictureStyles.css";
import UserDataContext from "../../../../../../utility/userContext/userContext";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../../../utility/AuthContext/authContext";

export default function ProfilePicture() {
  const [isFollowed, setIsFollwed] = useState();
  const { username } = useParams();
  const userData = useContext(UserDataContext);
  const { loggedUserData } = useContext(AuthContext);
  const followedState = isFollowed
    ? "followedProfileIcon"
    : "followProfileIcon";

  const handleOnClickFollowEvent = () => {
    setIsFollwed(!isFollowed);
  };

  return (
    <section className="profilePictureSection-container">
      <div className="followProfileIcon-container">
        <img
          className={
            username === null || loggedUserData !== username
              ? "visitedProfile"
              : followedState
          }
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
