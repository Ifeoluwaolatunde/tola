import React, { useState } from "react"

export function Kemi(){
    const [isShown,setisShown]=useState(false);
    const toggle=()=>{
        setisShown((isShown) =>!isShown)

    } 
    return(
        <div>
        <button onClick={toggle}>Click to know brand</button> {isShown &&<p>Gucci</p>}
      </div>
    )
}