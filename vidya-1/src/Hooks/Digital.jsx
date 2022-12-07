import React, { useEffect } from "react";
import { useState } from "react";

let Digital = () => {
    let [ct, setCt] = useState(new Date().toLocaleTimeString())

    useEffect( () => {
        setInterval(() => {setCt(new Date().toLocaleTimeString())},[1000])

        return () => {
            console.log('At the time of unmounting')
        }
    },[])

return <>
            <h1>Digital Clock</h1>
            <h1>Current Time : {ct}</h1>
       </>
}
export default Digital
