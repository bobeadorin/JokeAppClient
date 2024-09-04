/* eslint-disable react/prop-types */
import "./JokeCarouselStyles.css";
import { useState, useEffect, useRef } from "react";
import JokeCard from "../../../JokeHomePage/components/JokeCard/JokeCard";

export default function JokeCarousel({ data }) {
  const [prevIndex, setPrevIndex] = useState(data.index);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / data.jokes.length;

      if (data.index > prevIndex && data.index > 2) {
        // Scrolling to the right
        container.scrollLeft += itemWidth;
      } else if (data.index < prevIndex && data.index < data.jokes.length - 3) {
        // Scrolling to the left
        container.scrollLeft -= itemWidth;
      }

      setPrevIndex(data.index);
    }
  }, [data.index, prevIndex, data.jokes.length]);

  return (
    <div className="carouselContainer" ref={scrollContainerRef}>
      {data.jokes.map((card, index) => (
        <div
          key={card.id}
          className={
            data.index === index ? "JokeWrapper-carousel" : "jokeWrapperDefault"
          }
          onClick={() => data.setIndex(index)}
        >
          <JokeCard
            key={card.id}
            jokeConfig={{
              isFavorite: false,
              isLiked: false,
              joke: card,
              size: "S",
            }}
          />
        </div>
      ))}
    </div>
  );
}
