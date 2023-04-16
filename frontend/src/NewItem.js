import {useState} from 'react'
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './items.css'

export async function getItemNew({ params }) {
    const response = await fetch(`http://localhost:3001/stores/${params.storeId}`,  {
        method: "GET",
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resp = await response.json(); 
    console.log("response", resp); 
    return resp;
  }

export default function CreateItem() {
    const storeInfo = useParams();
    const item = useLoaderData(); 
    const nameChange = (event) => {
        inputProductName = event.target.value; 
    }; 
    const [inputProductName, setInputProductName] = useState('');
    const [inputProductQuantity, setInputProductQuantity] = useState('');
    const [inputProductPrice, setInputProductPrice] = useState('');


    async function handleSubmit(data) {
        console.log(storeInfo.storeId); 

      const newProduct = {
        name: inputProductName,
        quantity: inputProductQuantity, 
        price: inputProductPrice,
        store_id: storeInfo.storeId
      };
      console.log(newProduct); 
      //console.log(newProduct.store_id); 
      console.log(JSON.stringify(newProduct)); 
      await fetch(`http://localhost:3001/stores/${storeInfo.storeId}/items/new`, {
        method: "POST",
        body: JSON.stringify(newProduct),
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json'
        }
      })
    }
  
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e.data); 
      }}>
        <link rel="stylesheet" href="items.css" />
        <input type="text" placeholder="Item name..." value={inputProductName} onChange={(e) => setInputProductName(e.target.value)} />
        <input type="text" placeholder="Item quantity..." value={inputProductQuantity} onChange={(e) => setInputProductQuantity(e.target.value)} />
        <input type="text" placeholder="Item price..." value={inputProductPrice} onChange={(e) => setInputProductPrice(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    )
  }