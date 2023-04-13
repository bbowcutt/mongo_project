import {useState} from 'react'

export default function CreateItem() {
    const nameChange = (event) => {
        inputProductName = event.target.value; 
    }; 
    const [inputProductName, setInputProductName] = useState('');
    const [inputProductQuantity, setInputProductQuantity] = useState('');
    const [inputProductPrice, setInputProductPrice] = useState('');


    async function handleSubmit(data) {
      const newProduct = {
        name: inputProductName
      };
      console.log(JSON.stringify(newProduct)); 
      await fetch(`http://localhost:3001/stores/new`, {
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