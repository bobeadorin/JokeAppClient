import "./ShopCategorySideBarStyles.css";

export default function ShopCategorySideBar() {
  return (
    <section className="shopCategoryContainer">
      <h1>Category</h1>
      <div className="shopCategory-btns">
        <button>ALL</button>
        <button>Mugs</button>
        <button>T-Shirts</button>
        <button>Art</button>
      </div>
    </section>
  );
}
