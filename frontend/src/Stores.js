import {Link, useLoaderData} from 'react-router-dom';

export default function Stores() {
  const stores = useLoaderData();
  return (
    <>
      <div>
        <Link to={`${stores.stores[0]._id}`}><h1>{stores.stores[0].name}</h1></Link>
      </div>
    </>
  );
}



async function fetchStore() {
  const response = await fetch(`http://localhost:3001/stores`, {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
  });

  const jsonResponse = await response.json();

  console.log(jsonResponse);

  return jsonResponse;
}

export { fetchStore };
