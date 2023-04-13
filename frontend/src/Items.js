import {Link, useLoaderData} from 'react-router-dom';

export default function Items() {
  const items = useLoaderData();
  return (
    <>
      <div>
        
        {items.map(item => <Link key={item._id} to={`${item._id}`}><h1>{item.name}</h1></Link>)}
      </div>
    </>
  );
}

async function fetchItem() {
  const response = await fetch(`http://localhost:3001/stores/:storeId/items`, {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
  });


  return await response.json();
}

export { fetchItem };
