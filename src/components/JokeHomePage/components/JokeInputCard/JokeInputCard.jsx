import { useState, useContext } from "react";
import "./JokeInputCardStyles.css";
import { postJoke } from "../../../../utility/requests";
import useOnClickRequestWithAuthCheck from "../../../../utility/hooks/useOnClickRequestWithAuthCheck";
import LoginPopup from "../../../LoginPopup/LoginPopup";
import { categoryCardRoutes } from "../../../../utility/routes";
import { AuthContext } from "../../../../utility/AuthContext/authContext";

export default function JokeInputCard() {
  const [placeHolderText, setPlaceHolderText] = useState("Write a joke!");
  const [jokeText, setJokeText] = useState("");
  const [category, setCategory] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const { data, handleRequest } = useOnClickRequestWithAuthCheck();
  // const { loggedUserData, isLoggedIn } = useContext(AuthContext);

  const handleOnChange = (e) => {
    // console.log(isLoggedIn, loggedUserData);
    // if (isLoggedIn === false) {
    //   setShowPopUp(true);
    // }
    setJokeText(e.target.value);
  };

  const handleCategorySelect = (categorySelected) => {
    setCategory(categorySelected);
  };

  const handleSubmitJoke = async () => {
    await handleRequest(postJoke, { joke: jokeText, category: category });
    setJokeText("");
    setCategory("");
  };

  return (
    <section className="jokeInputCardContainer">
      <div className="userInfo-inputCard">
        <img
          className="jokeInputProfileImg"
          src="/profilePageImgs/ProfileImg.png"
          alt=""
        />
        <p className="username-inputCard">JoeDoeTheFirst</p>
      </div>
      <input
        placeholder={placeHolderText}
        type="text"
        className="jokeInput"
        onClick={() => setPlaceHolderText("")}
        onChange={(e) => handleOnChange(e)}
        value={jokeText}
      />
      <div className="categorySelect-section">
        {categoryCardRoutes.map((element, index) => (
          <img
            className={
              category == element.name
                ? "post-category post-category-selected"
                : "post-category"
            }
            key={index}
            src={element.route}
            onClick={() => handleCategorySelect(element.name)}
          />
        ))}
        <img
          className="postJokeIcon"
          src="\jokeHomePageImages\jokeInputCard\postJokeIcon.png"
          alt=""
          onClick={async () => handleSubmitJoke()}
        />
      </div>
      {/* {showPopUp && <LoginPopup />} */}
    </section>
  );
}
