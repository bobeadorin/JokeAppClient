import "./SideBarStyles.css";
import { categoryCardRoutes } from "../../../../utility/routes";
import JokeCategoryCard from "./components/JokeCategoryCard/JokeCategoryCard";
import { useState } from "react";
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={isOpen ? "sideBarContainer" : "closedSideBarContainer"}>
      <div className="topCategoryOptions-container">
        <img
          src="\jokeHomePageImages\jokeSideBarIcons\categorySelectionIcons\categoryIcon.png"
          alt="categoryLogo"
          className="categoryIcon categoryIconSize "
        />
        <div
          className={
            isOpen
              ? "mostPopularAndAllJokes-wrapper"
              : "mostPopularAndAllJokes-wrapper-Closed"
          }
        >
          <img
            src="\jokeHomePageImages\jokeSideBarIcons\categorySelectionIcons\mostPopularIcon.png"
            alt=""
            className="mostPopularIcon categoryIconSize"
          />
          <img
            src="\jokeHomePageImages\jokeSideBarIcons\categorySelectionIcons\allJokesIcon.png"
            alt="allJokesIcon"
            className="allJokesIcon categoryIconSize"
          />
        </div>
      </div>
      <div className="categoryCards-container">
        {categoryCardRoutes.map((cardInfo) => (
          <JokeCategoryCard
            props={{
              route: cardInfo.route,
              name: cardInfo.name,
              isOpen: isOpen,
            }}
          />
        ))}
      </div>
      <img
        src={
          isOpen
            ? "\\jokeHomePageImages\\jokeSideBarIcons\\collapseSidebarBtnIcon.gif"
            : "\\jokeHomePageImages\\jokeSideBarIcons\\extendSidebarBtnIcon.gif"
        }
        alt="sdf"
        className="collapseSidebarBtn"
        onClick={() => setIsOpen(!isOpen)}
      />
    </section>
  );
}
