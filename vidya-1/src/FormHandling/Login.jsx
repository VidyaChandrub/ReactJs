import React from "react";

class Login extends React.Component{
    state = {
        email:"",
        password:""
    }
    emailHandler = (event) => {
        this.setState({email:event.target.value})
    }
    passwordHandler = (event) => {
        this.setState({password:event.target.value})
    }
    submitHandler = (event) => {
        alert(`${this.state.email}`)
    }
render(){
    return(
        <div><h1 className="text-danger">Form handling in jsx!</h1>

        <br/><br/>
        <form>
        <label>Email Id</label>
        <input type="text" name="email" value={this.state.email} onChange={this.emailHandler}/><br/><br/>
        <label>Password</label>
        <input type="text" name="password" value={this.state.password} onChange={this.passwordHandler}/><br/><br/>
        <input type="submit" value="Login" className="btn btn-success"/>
        </form>
        </div>
    );
}
}
export default Login