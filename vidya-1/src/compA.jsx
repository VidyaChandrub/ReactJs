import React from "react";
import CompB from './CompB';

let CompA=()=>{

let emp_Name = "prasanna";
let emp_Sal = "30000";
let emp_loc = ['Banglore','Hyderbad'];
let emp_det = {
       height:'4 inch',
       weight:'45 kg'
};

return <div>
       <CompB eName={emp_Name} esal={emp_Sal} eloc={emp_loc} edet={emp_det}/>
       </div>

}
export default CompA