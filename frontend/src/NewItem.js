import {useState} from 'react'

export async function getItemNew({ params }) {
    const response = await fetch(`http://localhost:3001/stores/${params.storeId}/items/${params.itemId}/new`);
    return await response.json();
  }

export default function CreateItem() {
    const nameChange = (event) => {
        inputProductName = event.target.value; 
    }; 
    const [inputProductName, setInputProductName] = useState('');
    const [inputProductQuantity, setInputProductQuantity] = useState('');
    const [inputProductPrice, setInputProductPrice] = useState('');


    async function handleSubmit(data) {
      const newProduct = {
        name: inputProductName,
        quantity: inputProductQuantity, 
        price: inputProductPrice
      };
      console.log(JSON.stringify(newProduct)); 
      await fetch(`http://localhost:3001/stores/:storeId/items/new`, {
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
        <input type="text" placeholder="Item name..." value={inputProductName} onChange={(e) => setInputProductName(e.target.value)} />
        <input type="text" placeholder="Item quantity..." value={inputProductQuantity} onChange={(e) => setInputProductQuantity(e.target.value)} />
        <input type="text" placeholder="Item price..." value={inputProductPrice} onChange={(e) => setInputProductPrice(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    )
  }