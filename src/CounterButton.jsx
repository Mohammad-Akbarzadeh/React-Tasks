import { useState } from "react"

export default function CounterButton(){
    let [currentNumber,setcurrentNumber] = useState(0)
    function clickhandler(){
        setcurrentNumber(currentNumber += 1)
    }
    function clickresethandler() {
        setcurrentNumber(currentNumber = 0)
    }
    let devStyles ={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        flexDirection:"column",
        gap:"15px"
    }
    return( 
        <div style={devStyles}>
            <h1>The current is : {currentNumber}</h1>
            <button onClick={clickhandler}>Click to increase</button>
            <button onClick={clickresethandler}>Click to reset</button>
        </div>
    )
}