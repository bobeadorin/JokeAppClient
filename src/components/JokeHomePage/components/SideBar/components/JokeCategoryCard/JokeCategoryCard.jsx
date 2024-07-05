import "./JokeCategoryCardStyles.css";

export default function JokeCategoryCard({ props }) {
  return (
    <div className="jokeCategoryCard-container">
      <p
        className={props.isOpen ? "" : "isClosed"}
        style={{ fontFamily: "Silkscreen, sans-serif" }}
      >
        {props.name} JOKES
      </p>
      <img src={props.route} alt="" />
    </div>
  );
}
