import { useLoaderData } from "react-router-dom";
import './items.css'

export async function getItem({ params }) {
  const response = await fetch(`http://localhost:3001/stores/${params.storeId}/items/${params.itemId}`);
  return await response.json();
}

export default function SingleItem() {
  const item = useLoaderData();

  return (
    <div>
      <link rel="stylesheet" href="items.css" />
      <h1>name: {item.name}</h1>
      <h2>quantity: {item.quantity}</h2>
      <h2>price: {item.price}</h2>

    </div>
  );
}