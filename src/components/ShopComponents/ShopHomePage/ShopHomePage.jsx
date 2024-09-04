import "./ShopHomePageStyles.css";
import ShopCategorySideBar from "../ShopCategorySideBar/ShopCategorySideBar";
import ShopCardsContainer from "../ShopCardsContainer/ShopCardsContainer";

export default function ShopHomePage() {
  return (
    <section className="shopHomePage-container">
      <ShopCategorySideBar />
      <ShopCardsContainer />
    </section>
  );
}
