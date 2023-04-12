import {Link, useLoaderData} from 'react-router-dom';

export default function Stores() {
  const stores = useLoaderData();
  return (
    <>
      <div>
      
        {stores.map(store => <Link to={`${store._id}`}><h1>{store.name}</h1></Link>)}
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


  return await response.json();
}

export { fetchStore };
