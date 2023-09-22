import React, { useState } from "react";

function Bgchange(){
    const[color,setColor]=useState("olive")

    function chnager(){
        setColor("#f44336")
    }
    function chnagergreen(){
        setColor("#4CAF50")
    }
    function chnagerblack(){
        setColor("#008CBA")
    }

return(
    <>
        <div className="Bodycolor" style={{backgroundColor:color}}>
           <h1>For background Color change please click on the below button</h1> 
           <div className="groupofbtn">
            <button className="button" onClick={chnager} style={{backgroundColor:"#f44336",color:"white"}}>Red</button>
            <button className="button" onClick={chnagergreen} style={{backgroundColor:"#4CAF50",color:"white"}}>Green</button>
            <button  className="button" onClick={chnagerblack} style={{backgroundColor:"#008CBA",color:"white"}}>Blue</button>
        </div>
        </div>
        
    </>
)
   
}

export default Bgchange;