import "./JokeProfileCardStyles.css";

export default function JokeProfileCard() {
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
    </section>
  );
}
