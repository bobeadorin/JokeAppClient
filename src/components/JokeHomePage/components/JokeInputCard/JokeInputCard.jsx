import { useState } from "react";
import "./JokeInputCardStyles.css";
import { postJoke } from "../../../../utility/requests";
import useOnClickRequestWithAuthCheck from "../../../../utility/hooks/useOnClickRequestWithAuthCheck";

export default function JokeInputCard() {
  const [placeHolderText, setPlaceHolderText] = useState("Write a joke!");
  const [jokeText, setJokeText] = useState("");
  const [category, setCategory] = useState("");
  const { data, isLoading, handleRequest } = useOnClickRequestWithAuthCheck(
    postJoke,
    { joke: jokeText, category: category }
  );

  const handleOnChange = (e) => {
    setJokeText(e.target.value);
  };

  const handleCategorySelect = (categorySelected) => {
    setCategory(categorySelected);
  };

  if (data) {
    console.log(data);
  }

  return (
    <section className="jokeInputCardContainer">
      <input
        placeholder={placeHolderText}
        type="text"
        className="jokeInput"
        onClick={() => setPlaceHolderText("")}
        onChange={(e) => handleOnChange(e)}
        value={jokeText}
      />
      <div>
        <img
          className="postJokeIcon"
          src="\jokeHomePageImages\jokeInputCard\postJokeIcon.png"
          alt=""
          onClick={async () => handleRequest()}
        />
        <div className="dropdown">
          <button className="dropbtn">
            {category != "" ? category : "category"}
          </button>
          <div className="dropdown-content">
            <div onClick={() => handleCategorySelect("Cat")}>Cat</div>
            <div onClick={() => handleCategorySelect("Programming")}>
              Programming
            </div>
            <div onClick={() => handleCategorySelect("Horror")}>Horror</div>
            <div onClick={() => handleCategorySelect("Dirty")}>Dirty</div>
            <div onClick={() => handleCategorySelect("Knock")}>Knock</div>
          </div>
        </div>
      </div>
    </section>
  );
}
