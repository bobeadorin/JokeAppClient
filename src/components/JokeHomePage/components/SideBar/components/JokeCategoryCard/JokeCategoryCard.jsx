/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import "./JokeCategoryCardStyles.css";

export default function JokeCategoryCard({ props }) {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <div
      className="jokeCategoryCard-container"
      onClick={() => navigate(`/jokes/${props.name}`)}
    >
      <p
        className={props.isOpen ? "" : "isClosed"}
        style={{ fontFamily: "Silkscreen, sans-serif" }}
      >
        {props.name} JOKES
      </p>
      <img
        src={props.route}
        alt=""
        className={category === props.name ? "categorySelected" : ""}
      />
    </div>
  );
}
