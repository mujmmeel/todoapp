import React,{useState} from "react";
import { Grid, TextField,Button } from "@mui/material";
import {StudentItem} from "./StudentItem";


export const StudentList=()=>{
    const[data,setData]=useState([]);
    
    const [name, setName]=useState();
    const [cls, setCls]=useState();
    const [div, setDiv]=useState();

    const handleSub=()=>{
          if(name.trim()!="");
          if(cls.trim()!="");
          if(div.trim()!="");
          const student={name, cls, div};
          setData([ student,...data]);
          setName("");
          setCls("");
          setDiv("");
    }

    return(
        <div>
            <h1>Student Data📒</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField value={name} variant="outlined" label="Full Name👨‍🎓" fullWidth onChange={(e)=>setName(e.target.value)} />
                </Grid>
                <Grid item xs={2}>
                    <TextField value={cls} variant="outlined" label="Class🏛️" fullWidth onChange={(e)=>setCls(e.target.value)}/>
                </Grid>
                <Grid item xs={2}>
                    <TextField value={div} variant="outlined" label="Div⌨️" fullWidth onChange={(e)=>setDiv(e.target.value)}/>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="error" onClick={handleSub} >Add</Button>
                </Grid>
                {
                    data.length > 0 && data.map((item)=>
                    <StudentItem item={item}/>
                    )
                }
            </Grid>
        </div>
    );
};