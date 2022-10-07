import { SettingsSystemDaydream } from "@mui/icons-material";
import React,{useState} from "react";

export const Circletask=()=>{
    const[name1, setName1]=useState("");
    const[name2, setName2]=useState();
    const[name3, setName3]=useState("");
    const[name4, setName4]=useState("");
    const[name5, setName5]=useState("");

     
       
    const[data4, setData4]=useState([]);
    const[isEdit4 , setisEdit4]=useState(false);
    const[data5, setData5]=useState([]);
    const[isEdit5 , setisEdit5]=useState(false);

    const[date4, setDate4]=useState(null);
    const[date5, setDate5]=useState(null);




    const[data1, setData1]=useState([]);
    const[data2, setData2]=useState([]);
    const[date2, setDate2]=useState(null);
    const[isEdit2 , setisEdit2]=useState(false);

    const[data3, setData3]=useState([]);
    const[date3, setDate3]=useState(null);
    const[isEdit3 , setisEdit3]=useState(false);
    


    const[date1, setDate1]=useState(null);
    const[isEdit1 , setisEdit1]=useState(false);


    const handleround=()=>{
      if(isEdit1==true) {
        setName1("");
        setDate1(null);
        setisEdit1(false);

    }else{

        setName1(data1);
        setData1( name1);
    }}

    const handlepune=()=>{
        if(isEdit2==true){
            setData2(null);
            setisEdit2(false);
        }else{

            setData2(data2);
            setData2(name2) 
        }

    }

    const btnRed=()=> {
        document.getElementById("Div1").style.backgroundColor = "Red";
    }
    const btnGreen=()=>{
        document.getElementById("Div1").style.backgroundColor = "Green";
    }
    const btnBlue=()=> {
        document.getElementById("Div1").style.backgroundColor = "Blue";
    }
    const btnWhite=()=>{
        document.getElementById("Div1").style.backgroundColor= "White"
    }
    return(
        <div>

           { data1 ? <>(<button onClick={handleround}>Round</button>
            <div  className="round"/>{name1})</>:<> (<button onClick={handleround}>Square</button>
            <div className="round1"/>{name1})</>}   
            
            <button className="btn1" onClick={handlepune}>Pune</button>
            {data1 ? (<button style={{backgroundColor:"red"}} className="btn2" >Color</button>):(<button  className="btn2" style={{backgroundColor:"black", color:"white"}}>Color</button>)}
             
             { data2 ? (<h1  className="heading"></h1>):
                   ((<h1 value={name2} className="heading">Nanded</h1>))
             }


            <div >
                <input type="button" id="btnR" value="Red" onClick={btnRed} /> 
                <input type="button" id="btnG" value="Green" onClick={btnGreen}/>
                <input type="button" id="btnB" value="Blue" onClick={btnBlue}/>
                <input type="button" id="btnW" value="Hide" onClick={btnWhite}/>
</div>
              <div id="Div1"></div>

            
        </div>
    )
    }