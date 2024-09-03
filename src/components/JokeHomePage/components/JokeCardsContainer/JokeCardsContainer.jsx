import "./JokeCardsContainerStyles.css";
import JokeCard from "../JokeCard/JokeCard";
import JokeInputCard from "../JokeInputCard/JokeInputCard";
import { useEffect, useState } from "react";
import api from "../../../../utility/axiosConfig/axiosConfig";
import { useParams } from "react-router-dom";

export default function JokeCardsContainer() {
  const [jokes, setjokes] = useState(null);
  const { category } = useParams();
  const jokeCatergory = category || "home";

  useEffect(() => {
    const getJokesByPage = async () => {
      try {
        const res = await api.get(
          `/getAllJokesByPagination/1/10/category/${
            jokeCatergory == "Knock Knock" ? "Knock" : jokeCatergory
          }`
        );
        setjokes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getJokesByPage();
    console.log(jokes);
  }, [category]);

  if (jokes === null) return <div>not yet</div>;

  return (
    <section className="JokeCardsContainer">
      <div className="JokeCardsBgContainer">
        <JokeInputCard />
        <div className="cardsWrapper">
          {jokes.map((item) => (
            <JokeCard
              key={item.joke.id}
              jokeConfig={{ item, size: "default" }}
            />
          ))}
          <div>lol</div>
        </div>
      </div>
    </section>
  );
}
