/* eslint-disable react/prop-types */
import "./ProductCardStyles.css";
import { useCart } from "../../../../../utility/shopCartContext/CartContext";

export default function ProductCard({ item }) {
  const { cartItems, setCartItems } = useCart();

  // Function to handle quantity change and update context
  const updateQuantity = (newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative quantity
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity: newQuantity,
            totalPrice: item.price * newQuantity,
          }
        : cartItem
    );
    setCartItems(updatedCartItems); // Update the cart context
  };

  return (
    <div className="ProductCard-wrapper">
      <div className="imgContainer">
        <img src={item.path} alt={item.title} className="productCardImg" />
        <p>{item.title}</p>
      </div>
      <p className="sizeStat">{item.size}</p>
      <div className="CardStats">
        <div className="quantitySelectorProductCard">
          <button onClick={() => updateQuantity(item.quantity - 1)}>-</button>
          <div>
            <p>{item.quantity}</p>
          </div>
          <button onClick={() => updateQuantity(item.quantity + 1)}>+</button>
        </div>
      </div>
      <p className="priceStat">${item.totalPrice}</p>
    </div>
  );
}
