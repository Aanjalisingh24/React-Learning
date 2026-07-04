import { useState } from "react";

function Todoapp() {
    const [task, settask] = useState("");
    const [alltask, setalltask] = useState([]);

    const handlesubmit = () => {
        const copyalltask = [...alltask];
        copyalltask.push({ task });
        settask("");
        setalltask(copyalltask);
    }

    const handlechange = (e) => {
        settask(e.target.value);
    }

    const Deletetask = (idx) =>{
        const updatedeletetask = alltask.filter((items,index)=> index!==idx);
        setalltask(updatedeletetask);
    }

    return (
        <div>
            <div className="flex justify-center m-20 h-60">
                <div className="flex flex-col justify-center items-center gap-10 bg-stone-700 text-white rounded-xl">
                    <h1 className="text-center">ToDo App</h1>
                    <div className="flex p-3">
                        <h1 className="pe-2">Enter Task:</h1>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your task"
                                value={task}
                                onChange={handlechange}
                            />
                        </div>
                    </div>
                    <div className="bg-white text-stone-700 text-center p-2">
                        <button onClick={handlesubmit}>Add Task</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            {alltask.length > 0 && (
                <div className="flex justify-center items-center">
                    <div className="flex flex-col gap-3">
                        {alltask.map((elem, idx) => (
                            <div
                                key={idx}
                                className= "flex bg-stone-700 text-white p-4 w-60 rounded-xl"
                            >
                                <h1>Task {idx} :  </h1>
                                <h1 className="pl-3">{elem.task}</h1>
                                <button className=" p-2 bg-white text-stone-700 rounded-sm" onClick={()=> Deletetask(idx)}>Delete</button>
                            </div>

                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Todoapp;