import React from "react";

let Counter = () => {
  let [counter, setCounter] = React.useState(12)  
    
    return <>
        <h1>Counter : {counter}</h1>
        <button onClick={()=>{
            setCounter(counter 
                + 1)
        }}>+</button>
        <button onClick={() => {setCounter(counter - 1)}}>-</button>
       </>
}
export default Counter