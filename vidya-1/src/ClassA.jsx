import React from "react";
import ClassB from "./ClassB";

class ClassA extends React.Component{
    message = "Good Morning"
    user = {
        user_Name: "Vidya",
        user_email:"vidya@gmail.com",
        user_phNo : "8088285266"
    }

    render(){
        return (
            <>
            <h1>Class Component A</h1>
            <ClassB boolean={true} msg={this.message} user_det={this.user}/>
            </>
        )
    }

}
export default ClassA