import React from "react";
import {Grid, Card, CardContent} from "@mui/material"

export const StudentItem=({item})=>{
    return(
        <Grid item xs={4}>
            <Card>
               <CardContent>
                  <h4>{item.name}</h4>
                  {item.cls}-{item.div}
               </CardContent>
            </Card>

        </Grid>
    )
}