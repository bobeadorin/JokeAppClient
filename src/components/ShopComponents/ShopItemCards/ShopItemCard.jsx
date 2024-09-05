/* eslint-disable react/prop-types */
import "./ShopItemCardStyles.css";
import { useNavigate } from "react-router-dom";

export default function ShopItemCard({ data }) {
  const path = `/shopHomePageImages/shopItemsCards/ShopCardDesigns/${data.identifier}.png`;
  const navigate = useNavigate();

  return (
    <div
      className="itemCardContainer"
      onClick={() => navigate(`/shop/item/${data.identifier}`)}
    >
      <img className="itemCardImg" src={path} alt="" />
      <div className="itemInfo-container">
        <h1>{data.title}</h1>
        <p className="itemDescription">{data.description}</p>
        <p className="itemPrice">{data.price}</p>
      </div>
      <button className={`addToCartBtn ${data.category}`}>ADD TO CART</button>
    </div>
  );
}
