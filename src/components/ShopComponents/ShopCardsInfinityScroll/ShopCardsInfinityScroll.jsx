import "./ShopCardsInfinityScrollStyles.css";
import ShopItemCard from "../ShopItemCards/ShopItemCard";
import { useEffect, useState } from "react";
import { getAllItems } from "../../../utility/requests";
import { useParams } from "react-router-dom";

export default function ShopCardsInfinityScroll() {
  const { id } = useParams();
  const category = id ? id : "*";
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getItems = async () => {
      try {
        const res = await getAllItems(category);
        setItems(res);
        console.log(res);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getItems();
  }, [id]);

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!items) return null; // or some placeholder when items are not yet loaded

  return (
    <section className="shopInifinityScroll-container">
      {items.map((item) => (
        <ShopItemCard key={item.id} data={item} />
      ))}
    </section>
  );
}
