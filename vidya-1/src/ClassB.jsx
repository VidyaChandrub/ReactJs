import React from "react";
class ClassB extends React.Component{

 render(){
    return ( <>
                <h1>Class Component B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <p>User_Name : {this.props.user_det.user_Name}</p>
                <p>User_mail : {this.props.user_det.user_email}</p>
                <p>User_phoneNo : {this.props.user_det.user_phNo}</p>
                <p>
                  
                </p>
             </>

    )
 }
}
export default ClassB