import React,{useState} from "react";

export const Color=()=>{
    const[colored, setColor]=useState("");
    const[replace, setReplace]=useState([]);
  
    const handleChange=()=>{
        setReplace(colored);
    }
    
    return(
        <div className="coloring">
       <input className="chng" type="color" value={colored} onChange={(e)=>setColor(e.target.value)} />
       <button className="chng" onClick={handleChange} >𝕮𝖍𝖆𝖓𝖌𝖊</button>

       <div className="changeclr" style={{backgroundColor:`${replace}`}} ></div>


       </div>
    )
}