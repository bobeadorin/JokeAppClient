import "./ShopCategorySideBarStyles.css";
import { useNavigate } from "react-router-dom";

export default function ShopCategorySideBar() {
  const navigate = useNavigate();
  return (
    <section className="shopCategoryContainer">
      <h1>Category</h1>
      <div className="shopCategory-btns">
        <button onClick={() => navigate("/shop/*")}>ALL</button>
        <button onClick={() => navigate("/shop/plate")}>Plates</button>
        <button onClick={() => navigate("/shop/tshirt")}>T-Shirts</button>
        <button onClick={() => navigate("/shop/painting")}>Art</button>
      </div>
    </section>
  );
}
