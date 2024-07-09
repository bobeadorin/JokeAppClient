import JokeNavbar from "../JokeNavbar/JokeNavbar";
import "./LayoutStyles.css";

export default function Layout({ children }) {
  return (
    <article className="layoutComponent">
      <JokeNavbar />
      {children}
    </article>
  );
}
