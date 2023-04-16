import {Link, useLoaderData} from 'react-router-dom';

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
