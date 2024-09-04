/* eslint-disable react/prop-types */
import "./ShopItemCardStyles.css";
import { getImagePathByItemIdentifier } from "../../../utility/shopUtilityFunctions/getImagePathByItemIdentifier";

export default function ShopItemCard({ data }) {
  console.log(data);
  const path = data ? getImagePathByItemIdentifier(data.identifier) : "";
  console.log(path);
  // if (path === null) return <div>no</div>;

  return (
    <div className="itemCardContainer">
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
