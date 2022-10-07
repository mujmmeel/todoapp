import React from "react";
import {Grid, Card, CardContent} from "@mui/material"

export const TeamItem=({item})=>{
    return(

        <Grid item xs={2}>
           <Card>
                <CardContent>
                    <h4>{item.name1}</h4>
                    {item.type}-{item.level}
                </CardContent>
                
           </Card>
        </Grid>
    )
}