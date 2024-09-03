import "./JokeCardsContainerStyles.css";
import JokeCard from "../JokeCard/JokeCard";
import JokeInputCard from "../JokeInputCard/JokeInputCard";
import { useEffect, useState, useRef, useCallback } from "react";
import api from "../../../../utility/axiosConfig/axiosConfig";
import { useParams } from "react-router-dom";

export default function JokeCardsContainer() {
  const [jokes, setJokes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { category } = useParams();
  const jokeCategory = category || "home";
  const observer = useRef(null);

  const getJokesByPage = async (page, jokeCategory) => {
    setLoading(true);
    try {
      const res = await api.get(
        `/getAllJokesByPagination/${page}/10/category/${
          jokeCategory === "Knock Knock" ? "Knock" : jokeCategory
        }`
      );
      return res.data;
    } catch (err) {
      console.error("Error fetching jokes:", err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const loadMorePosts = async () => {
    if (loading || !hasMore) return;
    const newJokes = await getJokesByPage(page, jokeCategory);
    if (newJokes.length === 0) {
      setHasMore(false);
      return;
    }
    setJokes((prevJokes) => {
      const existingIds = new Set(prevJokes.map((joke) => joke.joke.id));
      return [
        ...prevJokes,
        ...newJokes.filter((joke) => !existingIds.has(joke.joke.id)),
      ];
    });
  };

  useEffect(() => {
    console.log(`Category changed to: ${jokeCategory}`);

    // Reset states for new category
    setJokes([]);
    setPage(1);
    setHasMore(true);

    // Fetch jokes for the new category
    loadMorePosts();
  }, [jokeCategory]);

  useEffect(() => {
    loadMorePosts();
  }, [page]);

  const lastPostElementRef = useCallback(
    (node) => {
      if (loading || !hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    console.log("Component rendered or updated");
    console.log(`Category changed to: ${jokeCategory}`);
    console.log(`Jokes changed to: ${jokes}`);
  });

  if (!jokes.length && !loading) return <div>No jokes available.</div>;

  return (
    <section className="JokeCardsContainer">
      <div className="JokeCardsBgContainer">
        <JokeInputCard />
        <div className="cardsWrapper">
          {jokes.map((item, index) => (
            <JokeCard
              key={item.joke.id}
              jokeConfig={{ item, size: "default" }}
              ref={jokes.length === index + 1 ? lastPostElementRef : null}
            />
          ))}
          {loading && <div>Loading...</div>}
        </div>
      </div>
    </section>
  );
}
