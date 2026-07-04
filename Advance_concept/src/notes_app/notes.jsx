import { useState } from "react";

function notess(){
    const [title , settitle] = useState("");
    const[task, settask] = useState([]);

    const handlechange = (e)=>{
        settitle(e.target.value);
    }

    const handlesubmit = (e) =>{
        e.preventDefault();

        const copytask = [...task];
        copytask.push({title});
        settask(copytask);
        settitle("");
        console.log(copytask);
    }

    const Delete = (idx) =>{
        const copytask = [...task];
        console.log(copytask);
    }

    return(
        <div className="flex justify-center bg-amber-900 text-white h-40 p-5">
           <form onSubmit={handlesubmit}>
            <input className="bg-white text-red-800 text-center"
            type="text"
            placeholder="enter your title"
            onChange={handlechange}
            />
            <div className="bg-white text-red-800 h-7 w-20 text-center m-5">
                <button>Submit</button>
            </div>
            {task.map(function(elem,idx){
                return (
                    <h1>{elem.title}</h1>
                )
                
            })}
            <button onClick={()=>{
                Delete(idx);
            }} className="bg-white text-red-800 h-7 w-20 text-center m-5">Delete</button>
           </form>
        </div>
    )
}

export default notess;