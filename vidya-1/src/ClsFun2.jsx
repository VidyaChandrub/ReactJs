import React from 'react';
let ClsFun2 = (props)=>{
  

    return(
        <>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee_Name : {props.Employee.emp_Name}</h3>
        <h3>Employee_Salary : {props.Employee.emp_salary}</h3>
        <h3>Employee_Mail : {props.Employee.emp_mail}</h3>
        </>
    )
}
export default ClsFun2