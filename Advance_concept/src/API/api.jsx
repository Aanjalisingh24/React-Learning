import axios from 'axios';
function api(){

    // async function getdata(){
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     const data = await res.json();
    //     console.log(data.title);
    // }

    const getdata = async()=>{
        const res = await  axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(res.data);

    }
    return(
        <div>
            <h1>this is api</h1>
            <button onClick={getdata}>button</button>
        </div>
    )
}

export default api;