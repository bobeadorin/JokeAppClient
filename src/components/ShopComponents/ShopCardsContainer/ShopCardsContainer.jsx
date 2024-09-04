import "./ShopCardsContainerStyles.css";
import ShopCardsInfinityScroll from "../ShopCardsInfinityScroll/ShopCardsInfinityScroll";

export default function ShopCardsContainer() {
  return (
    <section className="shopCardsContainer">
      <div className="cardsContainer-titleContainer">
        <img
          src="\shopHomePageImages\shopItemsCards\cartlogoTitle.png"
          alt=""
        />
        <h1>Shop</h1>
      </div>
      <ShopCardsInfinityScroll />
    </section>
  );
}
