import "./ShopItemCardStyles.css";

export default function ShopItemCard() {
  return (
    <div className="itemCardContainer">
      <img
        className="itemCardImg"
        src="shopHomePageImages\shopItemsCards\ShopCardDesigns\ArtCards\ProfileFlowersCard.png"
        alt=""
      />
      <div className="itemInfo-container">
        <h1>FlowerArt</h1>
        <p className="itemDescription">this is the coolest painting ever </p>
        <p className="itemPrice">15$</p>
      </div>
      <button className="addToCartBtn">ADD TO CART</button>
    </div>
  );
}
