import { createContext, useState, useContext } from "react";

// Create the CartContext
const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);

// CartProvider component to wrap around the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  // Provide the state and the addToCart function to children components
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
