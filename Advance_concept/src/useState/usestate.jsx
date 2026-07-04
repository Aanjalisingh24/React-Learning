import { useState } from "react";

function usestatec(){
    const[num, setnum] = useState(0);
    const[arr , setarr] = useState({user:"Aanjali" , age:20});
    const[num2 , setnum2] = useState({user:'Rishi' , age:20});
    const[num3 , setnum3] = useState(10);

    function Numberincrease(){
        setnum(num+1);
    };

    function Numberdecrease(){
        setnum(num-1);
    }

    function changearr(){
        const newarr = {...arr}
        newarr.user = "monika";
        newarr.age = 21;
        setarr(newarr);
    }

    const btnClicked =()=>{
        setnum2(prev=>({...prev , age:50}));
        setnum3(prev=>prev+1);
        setnum3(prev=>prev+1);
        setnum3(prev=>prev+1);
    }
    
    return(
        <div>
            <div>
                <h1>{num}</h1>
                <h1>{arr.user}</h1>
                <h1>{arr.age}</h1>
            </div>
            <h1>{num2.user} , {num2.age}</h1>
            <h1>{num3}</h1>
            <button onClick={Numberincrease}>Increase</button>
            <button onClick={Numberdecrease}>Decrease</button>
            <button onClick={changearr}>Changename</button>
            <button onClick={btnClicked}>changenum2</button>
        </div>
    )
}

export default usestatec;