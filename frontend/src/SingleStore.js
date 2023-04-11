import { useLoaderData } from "react-router-dom";

export async function getStore({ params }) {
  const response = await fetch(`http://localhost:3001/stores/${params.storeId}`);
  return await response.json();
}

export default function SingleStore() {
  const store = useLoaderData();

  return (
    <div key={store.name}>
      <h1>{store.id}</h1>
    </div>
  );
}