// function form(){

import { useState } from "react";

//     function changeform(){
//         console.log("inputing...")
//     }
//     return(
//         <div>
//            <form>
//             <input
//             type="text"
//             placeholder="Enter your name"
//             onChange={changeform}
//             ></input>
//            </form>
//         </div>
//     )
// }

// export default form;

// two-way handling
function twoway(){
    const[title , settitle] = useState("");

    const submithandler = (e)=>{
        e.preventDefault();
        console.log("Form submitted by" , title);
        settitle("");
    }
    return(
        <div>
            <form onSubmit={submithandler}>
                <input
                type="text"
                placeholder="enter your name"
                value={title}
                onChange={(e)=>{
                    settitle(e.target.value);
                }}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default twoway;