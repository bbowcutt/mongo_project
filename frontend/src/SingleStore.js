import {Link, useLoaderData} from 'react-router-dom';

export async function getStore({ params }) {
  const response = await fetch(`http://localhost:3001/stores/${params.storeId}`)

  const check =  await response.json();
  //console.log(check); 
  return check; 

}

export default function SingleStore() {
  const store = useLoaderData();


  return (
      <div>
      <header>
              <Link to={`/stores/${store._id}/items`}>View Items</Link>
      </header>
      <header>
              <Link to={`/stores/${store._id}/items/new`}>Add New Item</Link>
      </header>
      <h1>name: {store.name}</h1>
    
      
    </div>
  );
}
