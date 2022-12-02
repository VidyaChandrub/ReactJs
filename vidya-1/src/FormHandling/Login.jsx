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
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    /* this.setState({submit: this.state.input}) */
    }
    
render(){
    return(
        <div className="text-center">
        <h1 className="text-success">Form handling in jsx!</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <br/><br/>
        <form onSubmit={this.handleSubmit}>
        <label>Email Id</label>
        <input type="text" name="email"  onChange={this.emailHandler}/><br/><br/>
        
        <label>Password</label>
       
        <input type="password" name="password" onChange={this.passwordHandler}/><br/><br/>
        
        <input type="submit" value="Login" className="btn btn-info"/>
        </form>
        </div>
    );
}
}
export default Login