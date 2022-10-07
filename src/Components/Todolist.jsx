import React,{useState} from "react";
import {Grid,Button, TextField,} from "@mui/material"
import {Addingitem} from "./Addingitem";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';

export const Todolist=()=>{
    const[name, setName]=useState("");
    const[show, setShow]=useState(["Pune","Nanded","Mumbai"]);
    const[indexnum, setIndexnum]=useState(null);
    const[isEdit, setIsEdit]=useState(false);
    
    const handleAdd=()=>{
        if(name.trim()!="")
        if(isEdit==true){
            show.splice(indexnum,1, name)
            setName("");
            setIndexnum(null);
            setIsEdit(false);
     
        }else{

            setShow([...show, name]);
            setName("");
        }
    
        
    }   
     
    const handleEdit=(item , index)=>{
        setName(item);
        setIndexnum(index);
        setIsEdit(true);
    }
    const handleDelete=(index)=>{
        const filtered=show.filter((elem, i)=>i!=index);
        setShow(filtered);
    }
    return(
        <div>
            <h1>🆃🅾🅳🅾 🅻🅸🆂🆃</h1>
            <Grid container spacing={3}>

               {isEdit?(<Grid item xs={8}><TextField variant="outlined" color="error" fullWidth label="Type Here" style={{backgroundColor:" #f4a6e9 "}}
                value={name}  onChange={(e)=>setName(e.target.value)} /></Grid>):(<Grid item xs={8}><TextField variant="outlined"  fullWidth label="Type Here" style={{backgroundColor:"white"}}
                value={name}  onChange={(e)=>setName(e.target.value)} /></Grid>)}

                 {isEdit ? (   <Grid item xs={4}><Button variant="contained" color="success"  onClick={handleAdd}>Update</Button> </Grid>
                ) :
                (<Grid item xs={4}><Button variant="contained" color="error"
                onClick={handleAdd}>Add</Button> </Grid>)}


                {
                    show.map((item,index)=>
                    <>
                    <Addingitem  item={item}/>

                      <DeleteIcon className="delicon" onClick={()=>handleDelete(index)} /> 
                      <BorderColorSharpIcon className="editicon" onClick={()=>handleEdit(item,index)}/>
                    </>
                    )
                }
                     </Grid>


        </div>
    )
}