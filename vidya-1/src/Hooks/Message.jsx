import React, { useState } from 'react'
 
let Message = () => {
    /* let [qty, setQty] =React.useState(1) */   
    let [msg, setMsg] = useState("hello")
    
    return <>
            <h1>Message Component : {msg}</h1>
            <button onClick={() => {setMsg('Good Morning')}}>GM</button> <nbsp></nbsp>
            <button onClick={() => {setMsg('Good Night')}}>GN</button>
           </>
}
export default Message