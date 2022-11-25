import React from "react";

let CompB=(props)=>{


    return (
        <div>
            <pre>{JSON.stringify(props)}</pre>
            <h3>Employee_Name : {props.eName}</h3>
            <h3>Employee_Salary : {props.esal}</h3>
            <h3>Employee_Location : {props.eloc[1]}</h3>
            <h3>Employee_Height : {props.edet.height}</h3>
            <h3>Employee_Weight : {props.edet.weight}</h3>
        </div>
    )
}
export default CompB