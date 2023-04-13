import {Link, useLoaderData} from 'react-router-dom';

export async function getItems({ params }) {
  const response = await fetch(`http://localhost:3001/stores/${params.storeId}`, {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }});

  const check =  await response.json();
  //console.log(check); 
  return check; 

}

export default function SingleStore() {
  const store = useLoaderData();

  console.log("SINGLE STORE CONSLOG", store); 

  return (
    <div>
      <h1>name: {store.name}</h1>
      <h1> item: </h1>
      <div>
        {store.map(item => <Link key={item._id} to={`${item._id}`}><h1>{item.name}</h1></Link>)}
      </div>
  
      
    </div>
  );
}
