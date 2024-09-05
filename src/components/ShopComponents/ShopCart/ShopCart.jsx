import { useCart } from "../../../utility/shopCartContext/CartContext";
import ProductCard from "./components/productCard/ProductCard";
import PaymentInfo from "./components/PaymentInfo";
import "./ShopCartStyles.css";
import { useNavigate } from "react-router-dom";

export default function ShopCart() {
  const { cartItems } = useCart(); // Access cartItems from context
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  // Calculate total price for the cart
  const totalCartPrice = cartItems.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );

  return (
    <section className="shopCartContainer">
      <img
        className="backBtnLogo"
        src="/shopHomePageImages/backLogo.png"
        alt=""
        onClick={handleGoBack}
      />
      <div className="shopCart-wrapper">
        <div className="shopCart-top">
          <img
            src="\shopHomePageImages\shopNavbarLogo\ShopCartLogo.png"
            alt=""
            className="shopCart-logo"
          />
        </div>
        <div className="shopcartContent-wrapper">
          <div className="productList-container">
            <div className="tableTitles-shopCart">
              <p className="productTitle-shopCart">Product</p>
              <div className="typeTitles-shopCart">
                <p>Size</p>
                <p>Quantity</p>
                <p>Total Price</p>
              </div>
            </div>
            <hr />
            <div className="cartProductCards">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))
              )}
            </div>
            <hr />
            <div className="price-wrapper">
              <div className="price-container">
                <div>
                  <p className="subtotal-p">Subtotal:</p>
                  <p>${totalCartPrice}</p>
                </div>
                <div>
                  <p className="shipping-p">Shipping:</p>
                  <p>Free</p>
                  <hr />
                </div>
                <div>
                  <h1>Total:</h1>
                  <p>${totalCartPrice}</p>
                </div>
              </div>
            </div>
          </div>
          <PaymentInfo />
        </div>
      </div>
    </section>
  );
}
