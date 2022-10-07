import React from "react";
import {Grid, Card, CardContent} from "@mui/material"

export const Addingitem=({item})=>{
    return(
        <Grid item xs={6}>
            <Card >
                <CardContent>
                    {item}
                </CardContent>
            </Card>
        </Grid>
    )
}