export function CreateStore({name = "sample store"}){
    var myHeaders = new Headers(); 
    myHeaders.append("Content-Type", "application/json"); 
    var raw = JSON.stringify({
        "name":name, 
    });

    var requestOptions = {
        method: 'POST', 
        headers: myHeaders,
        body: raw, 
        redirect: 'follow'
    }; 

    fetch('http://localhost:3001/stores/new', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); 
}

export default function NewStore({ }){
    var name; 
    const nameChange = (event) => {
        name = event.target.value; 
    }; 
    return (
        <div>
            <form onSubmit={() => CreateStore({name})}> 
                <div>
                    Name: <input type='text' name="description" onChange = {nameChange}> </input>
                </div>
                <div>
                    <button type = "submit">ADD</button>
                </div>
            </form>
        </div>
    )
}