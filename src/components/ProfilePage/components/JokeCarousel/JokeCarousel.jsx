import "./JokeCarouselStyles.css";
import { useState, useEffect, useRef } from "react";
import JokeCard from "../../../JokeHomePage/components/JokeCard/JokeCard";

export default function JokeCarousel() {
  const [scrollBarPositionX, setScrollBarPositionX] = useState(0);
  const [mainJokeCard, setMainJokeCard] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // scrollContainerRef.current.scrollTo(scrollBarPositionX, 0);
    // console.log(mainJokeCard);
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
    { type: "cat", size: "S" },
    { type: "dirty", size: "S" },
    { type: "horror", size: "S" },
    { type: "cat", size: "S" },
    { type: "dirty", size: "S" },
    { type: "horror", size: "S" },
    { type: "horror", size: "S" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "cat", size: "S" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "cat", size: "S" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "cat", size: "S" },
    { type: "dirty", size: "S" },
    { type: "dirty", size: "S" },
    { type: "cat", size: "S" },
  ];

  return (
    <div className="carouselContainer">
      {mockCardArray.map((card) => (
        <JokeCard
          jokeConfig={{
            type: card.type,
            size: card.size,
          }}
        />
      ))}
    </div>
  );
}
