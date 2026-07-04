import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function galproject() {

    const [img, setimg] = useState([]);

    const galaryapi = async () => {
        const res = await axios.get("https://picsum.photos/v2/list?page=5&limit=12");
        setimg(res.data);
    }

    useEffect(()=>{
        galaryapi;
    },[img]);

    return (
        <div>
            <div className="flex justify-center m-10">
                <button className="bg-amber-800 p-2 rounded-xl text-white" onClick={galaryapi}>Click here for seeing galary photoes</button>
            </div>
            <div className="grid grid-cols-3 gap-4 m-2">
                 {img.map((item) => (
                    <div key={item.id}>
                        <img className="w-full h-50 object-cover rounded-lg" src={item.download_url} />
                        <h1>Author: {item.author}</h1>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default galproject;