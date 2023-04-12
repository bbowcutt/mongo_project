// export function CreateStore({name = "sample store"}){
//     var myHeaders = new Headers(); 
//     myHeaders.append("Content-Type", "application/json"); 
//     var raw = JSON.stringify({
//         "name":name, 
//     });

//     var requestOptions = {
//         method: 'POST', 
//         headers: myHeaders,
//         body: raw, 
//         redirect: 'follow'
//     }; 

//     fetch('http://localhost:3001/stores/', requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error)); 
// }

// export default function NewStore({ }){
//     var name; 
//     const nameChange = (event) => {
//         name = event.target.value; 
//     }; 
//     return (
//         <div>
//             <form onSubmit={() => CreateStore({name})}> 
//                 <div>
//                     Name: <input type='text' name="description" onChange = {nameChange}> </input>
//                 </div>
//                 <div>
//                     <button type = "submit">ADD</button>
//                 </div>
//             </form>
//         </div>
//     )
//}

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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e.data); 
      }}>
        <input type="text" placeholder="Store name..." value={inputProductName} onChange={(e) => setInputProductName(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    )
  }