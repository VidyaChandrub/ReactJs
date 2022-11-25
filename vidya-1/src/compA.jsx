import React from "react";
import compB from './compB'

let compA=()=>{

let emp_Name = "prasanna";
let emp_Sal = "30000";

return (<div>
       <compB eName={emp_Name} esal={emp_Sal}/>
       </div>
)
}
export default compA