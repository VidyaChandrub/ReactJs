import React from "react";
import ClsFun2 from "./ClsFun2";
class ClsFun1 extends React.Component{
emp = {
    emp_Name:"Chandru",
    emp_salary: 45000,
    emp_mail:"Chandru@gmail.com"

}
render(){
    return ( <>
            <h1>Class Component</h1>
            <ClsFun2 Employee={this.emp}/>
           </>
           )
}


}
export default ClsFun1