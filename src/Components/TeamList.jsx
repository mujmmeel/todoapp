import React,{useState} from "react";
import {Grid, TextField,Button} from "@mui/material"
import {TeamItem} from "./TeamItem";

export const TeamList=()=>{
    const[data1, setData1]= useState([]);
    
    const [name, setName]=useState();
    const [type, setType]= useState();
    const [level, setLevel]=useState();

    const handlesub=()=>{
        if(name.trim()!=="");
        if(type.trim()!=="");
        if(level.trim()!=="");
        const players={name, type, level};
        setData1([players, ...data1]);
        setName("");
        setType("");
        setLevel("");
    }

    return(
        <div>
            <h1>Team Data📒</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField value={name}  onChange={(e)=>setName(e.target.value)} variant="outlined" color="success" label="Player Name" fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <TextField value={type} onChange={(e)=>setType(e.target.value)} variant="outlined" color="success" label="Player Type" fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <TextField value={level} onChange={(e)=>setLevel(e.target.value)} variant="outlined" color="success" label="Player Level" fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={handlesub} variant="contained" color="success">Add</Button>
                </Grid>
            {
               data1.length > 0 && data1.map((item)=>
                <TeamItem item={item}/>
                )
            }  
            </Grid>
        </div>
    )
}