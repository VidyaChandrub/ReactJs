import React from "react";

class Login extends React.Component{
    state = {
        email:"",
        password:""
    }
render(){
    return(
        <div><h1 className="text-danger">Form handling in jsx!</h1>

        <br/><br/>
        <form>
        <label>Email Id</label>
        <input type="text" /><br/><br/>
        <label>Password</label>
        <input type="text" /><br/><br/>
        <input type="submit" value="Login" className="btn btn-success"/>
        </form>
        </div>
    );
}
}
export default Login