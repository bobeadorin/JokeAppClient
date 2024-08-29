import "./JokeCardsContainerStyles.css";
import JokeCard from "../JokeCard/JokeCard";
import JokeInputCard from "../JokeInputCard/JokeInputCard";
import { useEffect, useState } from "react";
import api from "../../../../utility/axiosConfig/axiosConfig";

export default function JokeCardsContainer() {
  const [jokes, setjokes] = useState(null);

  useEffect(() => {
    const getJokesByPage = async () => {
      try {
        const res = await api.get("/getAllJokesByPagination/1/10");
        setjokes(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        console.log(jokes);
      }
    };
    getJokesByPage();
  }, []);

  if (jokes === null) return <div>not yet</div>;

  return (
    <section className="JokeCardsContainer">
      <div className="JokeCardsBgContainer">
        <JokeInputCard />
        <div className="cardsWrapper">
          {jokes.map((element) => (
            <JokeCard
              key={element.id}
              jokeConfig={{ type: element, size: "default" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
