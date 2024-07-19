import "./JokeProfileCardStyles.css";
import JokeCard from "../../../JokeHomePage/components/JokeCard/JokeCard";
import { useEffect, useState, useRef } from "react";

export default function JokeProfileCard() {
  const [scrollBarPositionX, setScrollBarPositionX] = useState(0);
  const [mainJokeCard, setMainJokeCard] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    scrollContainerRef.current.scrollTo(scrollBarPositionX, 0);
    console.log(mainJokeCard);
  }, [scrollBarPositionX]);

  useEffect(() => {
    if (mainJokeCard === null) {
      setMainJokeCard(mockCardArray[0]);
    }
  }, [mainJokeCard]);

  const handleIncreaseScrollPosition = () => {
    setScrollBarPositionX((prev) => prev + 800);
  };

  const handleDecreaseScrollPosition = () => {
    if (scrollBarPositionX > 0) {
      setScrollBarPositionX((prev) => prev - 800);
    } else return;
  };

  const mockCardArray = [
    { type: "horror", size: "S" },
    { type: "cat", size: "L" },
    { type: "dirty", size: "S" },
    { type: "horror", size: "S" },
    { type: "cat", size: "L" },
    { type: "dirty", size: "S" },
    { type: "horror", size: "S" },
    { type: "horror", size: "L" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "cat", size: "L" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "cat", size: "L" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "cat", size: "L" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "cat", size: "L" },
  ];

  return (
    <section className="jokeProfileCard-wrapper">
      <div className="topHeader">
        <h1>Jokes</h1>
        <img
          className="profileCategoryJoke"
          src="\profilePageImgs\JokeProfileIcon.png"
          alt="jokeLogo"
        />
      </div>
      <div className="ProfileJokeCarouselContainer">
        <div className="spotlightJokeContainer">
          <JokeCard
            jokeConfig={{
              type: "cat",
              size: "L",
            }}
          />
        </div>
        <div className="ProfileJokeCarouselWrapper">
          <div ref={scrollContainerRef} className="ProfileJokeCarousel">
            <div className="arrowContainer leftArrow">
              <img
                src="\profilePageImgs\ArrowIconProfileJokeCarousel.png"
                alt=""
                className="carouselArrow"
                onClick={handleDecreaseScrollPosition}
              />
            </div>
            {mockCardArray.map((element, index) => (
              <JokeCard
                key={index}
                jokeConfig={{
                  type: element.type,
                  size: "S",
                }}
                onClick={(element) =>
                  setMainJokeCard({
                    type: element.type,
                    size: "S",
                  })
                }
              />
            ))}
            <div className="arrowContainer rightArrow">
              <img
                src="\profilePageImgs\ArrowIconProfileJokeCarousel.png"
                alt=""
                className="carouselArrow"
                onClick={handleIncreaseScrollPosition}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
