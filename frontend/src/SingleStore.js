import {Link, useLoaderData} from 'react-router-dom';

export async function getStore({ params }) {
  const response = await fetch(`http://localhost:3001/stores/${params.storeId}`);
  return await response.json();
}

export default function SingleStore() {
  const store = useLoaderData();

  async function getItems(){
    const items = await fetch(`http://localhost:3001/stores/${store._id}/items`, {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
  });
  const response = await items.json(); 
  return response

  }
  const returnedItems = getItems(); 
  console.log(returnedItems); 
  


  //console.log(items); 



  return (
    <div>
      <h1>name: {store.name}</h1>
      <div>
        {/* {items.map(item => <Link key={item._id} to={`${item._id}`}><h1>{item.name}</h1></Link>)} */}
      </div>
  
      
    </div>
  );
}