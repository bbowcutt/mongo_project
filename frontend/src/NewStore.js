import {useState} from 'react'

export default function CreateProduct() {
    const nameChange = (event) => {
        inputProductName = event.target.value; 
    }; 
    const [inputProductName, setInputProductName] = useState('');
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
        <div>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e.data); 
      }}>
        <input type="text" placeholder="Store name..." value={inputProductName} onChange={(e) => setInputProductName(e.target.value)} />
        <button type="submit">Add</button>
        </form>
        </div>
    )
  }