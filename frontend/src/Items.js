import {Link, useLoaderData} from 'react-router-dom';
import './items.css'

export default function Items() {
  const items = useLoaderData();
    //const response =  fetch(`http://localhost:3001/stores/${items.storeId}/items`,     {
   // method: "GET",
    //mode: 'cors',
    //headers: {
      //  'Content-Type': 'application/json'
    //}
  
  return (
      <>
      <div>
      <link rel="stylesheet" href="items.css" />
        {items.map(item => <Link key={item._id} to={`${item._id}`}><h1>{item.name}</h1></Link>)}
      </div>
    </>
  );
}

async function getItems({ params }) {
     //const items = useLoaderData();
    const response = await fetch(`http://localhost:3001/stores/${params.storeId}/items`, {
     method: "GET",
     mode: 'cors',
     headers: {
         'Content-Type': 'application/json'
     }
   });


   return await response.json();
 }

 export { getItems };
