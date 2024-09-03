import "./JokeCarouselStyles.css";
import { useState, useEffect, useRef } from "react";
import JokeCard from "../../../JokeHomePage/components/JokeCard/JokeCard";

export default function JokeCarousel({ data }) {
  const [scrollBarPositionX, setScrollBarPositionX] = useState(0);
  const [mainJokeCard, setMainJokeCard] = useState(null);
  const [jokes, setJokes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    console.log(data);
    setIsLoading(true);
    setJokes(data);
    setIsLoading(true);
  });

  return (
    <div className="carouselContainer">
      {data.jokes.map((card) => (
        <JokeCard
          key={card.id}
          jokeConfig={{
            isFavorite: false,
            isLiked: false,
            joke: card,
            size: "S",
          }}
        />
      ))}
    </div>
  );
}
