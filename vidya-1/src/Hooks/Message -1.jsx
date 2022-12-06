import React from 'react'
 
let Message = () => {
    /* let [qty, setQty] =React.useState(1) */   
    let [msg, setMsg] =React.useState("hello")
    let gmHandler = () => {
        setMsg('Good Morning')
    }

    return <>
            <h1>Message Component : {msg}</h1>
            <button onClick={gmHandler}>GM</button>
           </>
}
export default Message