import ShopNavbar from "../ShopNavbar";

export default function ShopLayout({ children }) {
  return (
    <article className="layoutComponent">
      <ShopNavbar />
      {children}
    </article>
  );
}
