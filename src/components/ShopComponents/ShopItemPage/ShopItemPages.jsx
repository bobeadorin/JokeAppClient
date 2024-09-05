import { useState, useEffect } from "react";
import "./ShopItemPagesStyles.css";
import { useParams } from "react-router-dom";
import { getItemByIdentifier } from "../../../utility/requests";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../utility/shopCartContext/CartContext";

export default function ShopItemPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");
  const { addToCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const itemData = await getItemByIdentifier(id);
      setData(itemData);
    };
    fetchData();
  }, []);

  const handleAddToCart = () => {
    if (data) {
      const item = {
        path: `/shopHomePageImages/shopItemsCards/ShopCardItems/${data.identifier}.png`,
        id: data.id,
        title: data.title,
        totalPrice: data.price * quantity,
        quantity: quantity,
        size: size,
      };
      addToCart(item); // Add the item to the cart
    }
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleQuantityIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };
  console.log(data, "asdas");
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="shopItemPageContainer">
      <img
        className="backBtnLogo"
        src="/shopHomePageImages/backLogo.png"
        alt=""
        onClick={handleGoBack}
      />
      <div className="shopItemPage-wrapper">
        <div className="itemImg-container">
          <div className="itemImg-wrapper">
            <img
              className="shopItemPage-image"
              src={`/shopHomePageImages/shopItemsCards/ShopCardItems/${data.identifier}.png`} // Adjust based on your actual path and identifier
              alt={data.Title}
            />
          </div>
        </div>
        <div className="itemInformation-container">
          <h1 className="cardTitle-shopItemPage">{data.title}</h1>
          <p className="cardPrice-shopItemPage">${data.price}</p>
          <p className="cardDescription-shopItemPage">{data.description}</p>
          <div className="sizeContainer">
            <p className="sizeText">Size</p>
            <button onClick={() => setSize("S")}>S</button>
            <button onClick={() => setSize("M")}>M</button>
            <button onClick={() => setSize("L")}>L</button>
            <button onClick={() => setSize("XL")}>XL</button>
          </div>
          <div className="bottom-container-shopItemPage">
            <div className="quantity-container">
              <p className="QuantityP">Quantity</p>
              <div className="quantitySelector">
                <button onClick={handleQuantityDecrement}>-</button>
                <div>
                  <p>{quantity}</p>
                </div>
                <button onClick={handleQuantityIncrement}>+</button>
              </div>
            </div>
            <button
              className="addToCartBtn-shopItemPage"
              onClick={async () => handleAddToCart()}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
