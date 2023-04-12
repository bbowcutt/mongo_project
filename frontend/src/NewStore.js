export default function CreateStore() {
    const [inputStoreName, setInputStoreName] = useState('');
    async function handleSubmit(data) {
      const newStore = {
        name: inputStoreName
      };
  
      await fetch(`http:localhost:3001/stores`, {
        method: "POST",
        body: JSON.stringify(newStore),
      })
    }
  
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        // some handleSubmit function
      }}>
        <input type="text" placeholder="Store name..." value={inputStorename} onChange={(e) => ...} />
        <button type="submit">Add</button>
      </form>
    )
  }