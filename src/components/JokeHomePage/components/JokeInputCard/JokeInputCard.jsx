import { useState } from "react";
import "./JokeInputCardStyles.css";

export default function JokeInputCard() {
  const [placeHolderText, setPlaceHolderText] = useState("Write a joke!");
  const [jokeText, setJokeText] = useState("");

  const handleOnChange = (e) => {
    setJokeText(e.target.value);
  };

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
      <img
        src="\jokeHomePageImages\jokeInputCard\jokeInputLayerImg.png"
        alt=""
        className="jokeInput-leftCornerImg"
      />
      <img
        src="\jokeHomePageImages\jokeInputCard\jokeInputLayerImg.png"
        alt=""
        className="jokeInput-rightCornerImg"
      />
      <div>
        <img
          className="postJokeIcon"
          src="\jokeHomePageImages\jokeInputCard\postJokeIcon.png"
          alt=""
        />
      </div>
    </section>
  );
}
