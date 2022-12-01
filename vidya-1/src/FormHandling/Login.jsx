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
    /* submitHandler = (event) => {
        alert(`${this.state.email}`)
    } */
render(){
    return(
        <div><h1 className="text-success">Form handling in jsx!</h1>

        <br/><br/>
        <form>
        <label>Email Id</label>
        <input type="text" name="email" value={this.state.email} onChange={this.emailHandler}/><br/><br/>
        <p>{this.state.email}</p>
        <label>Password</label>
       
        <input type="password" name="password" value={this.state.password} onChange={this.passwordHandler}/><br/><br/>
        <p>{this.state.password}</p>
        <input type="submit" value="Login" className="btn btn-info"/>
        </form>
        </div>
    );
}
}
export default Login