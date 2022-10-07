import React from "react";
import {Todolist} from "./Todolist"

import {Todo1} from "./Todo1";

import {Color} from "./Color";
import {Circletask} from "./Circletask";

import { StudentList } from "./StudentList";

import { TeamList } from "./TeamList";

export const Home=()=>{
    return(
        <div className="main" >
            {/* <TeamList/> */}
            {/* <StudentList/> */}
            
             {/* <Circletask/> */}
            {/* <Color/> */}
            {/* <Todo1/> */}
            <Todolist/>
        </div>
    )
}