import React from "react";

class FunCls2 extends React.Component{

render(){
    return (
        <>
        <h2>CLS to FUN </h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h2>Student_Name : {this.props.Student.student_Name}</h2>
        <h2>Student_ID : {this.props.Student.student_id}</h2>
        </>
    )
}


}
export default FunCls2