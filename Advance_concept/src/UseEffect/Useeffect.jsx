import { useEffect, useState } from "react";

function Useeffect(){
    const[a , seta] = useState(0);

    const btn = ()=>{
        console.log("button1 clicked");
        seta(a+1);
    }
    const btn1 = ()=>{
        console.log("button2 clicked");
    }

    useEffect(()=>{
        console.log("re-render");
    },[a]);

    return(
    <div>
        <h1>a: {a}</h1>
        <div>
           <button onClick={btn}>button1</button>
        </div>
        <div>
            <button onClick={btn1}>button2</button>
        </div>
    </div>
    )
}

export default Useeffect;