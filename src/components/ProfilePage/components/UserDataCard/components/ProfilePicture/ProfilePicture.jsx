import { useState, useContext } from "react";
import "./ProfilePictureStyles.css";
import UserDataContext from "../../../../../../utility/userContext/userContext";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../../../utility/AuthContext/authContext";
import useOnClickRequestWithAuthCheck from "../../../../../../utility/hooks/useOnClickRequestWithAuthCheck";
import { followUser } from "../../../../../../utility/requests";

export default function ProfilePicture() {
  const { username } = useParams();
  const user = useContext(UserDataContext);
  const { loggedUserData } = useContext(AuthContext);
  const [isFollowed, setIsFollowed] = useState(user.isFollowed);
  const { handleRequest } = useOnClickRequestWithAuthCheck();
  console.log(user.isFollowed);
  const followedState = isFollowed
    ? "followedProfileIcon"
    : "followProfileIcon";

  console.log(loggedUserData);

  const handleOnClickFollowEvent = async () => {
    setIsFollowed(!isFollowed);
    await handleRequest(followUser, username);
  };

  return (
    <section className="profilePictureSection-container">
      <div className="followProfileIcon-container">
        <img
          className={username === null ? "visitedProfile" : followedState}
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
        <h2>{user !== null ? user.userData.username : "nu merge"}</h2>
        <p>Master Memer</p>
      </div>
    </section>
  );
}
