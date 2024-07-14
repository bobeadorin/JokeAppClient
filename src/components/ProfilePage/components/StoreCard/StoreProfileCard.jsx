import "./StoreProfileCardStyles.css";

export default function StoreProfileCard() {
  return (
    <section className="storeProfileCard-wrapper">
      <div className="topHeaderStore">
        <h1>Store</h1>
        <img
          className="profileCategoryStore"
          src="\profilePageImgs\ShopCartIcon.png"
          alt="storeLogo"
        />
      </div>
    </section>
  );
}
