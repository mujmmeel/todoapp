import React,{useState} from "react";

export const Todo1=()=>{
    const[name,setName]=useState("");
    const[data, setData]=useState([]);

    const[indexnum, setindexNum]=useState(null);
    const[isEdit , setisEdit]=useState(false);

    const handleAdd=()=>{
        if(name.trim()!="")
        if(isEdit==true){
            data.splice(indexnum,1,name);
            setName("");
            setindexNum(null);
            setisEdit(false);

        }else{

            setData([...data, name]);
            setName("");
        }
    }

    const handleDel=(index)=>{
        const filtered=data.filter((elem,i )=>i!=index);
        setData(filtered);
    }
    const handleEdit=(item,index)=>{
        setName(item);
        setindexNum(index);
        setisEdit(true);
    }

    return(
        <div>
            <h1>TodoApp</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={handleAdd} >Add</button>

            {
                data.map((item, index)=>
                <>
                <h1>{item}</h1>
                <button onClick={()=>handleDel(index)} >del</button>
                <button onClick={()=>handleEdit(item,index)} >edit</button>
                </>
                )
            }
        </div>
    )
}