import React from "react";

class Registartion extends React.Component{
state={
    userName:"",
    email:"",
    mobile:"",
    password:""
}
updateHandler =(event)=>{
this.setState({[event.target.name]:event.target.value})
}
submitHandler =(event)=>{
event.preventDefault()
console.log(this.state)
}
render(){
    return (<div className="container text-center form-group">
            <div className="row">
                <div className="col-md-12">
                    <pre>{JSON.stringify(this.state)}</pre>
            <h1 className="text-danger">Registration Form</h1><br/><br/>
            
            <form onSubmit={this.submitHandler}>
                <label>User Name</label>
                <input type="text" name="userName" onChange={this.updateHandler} className="form-control"/><br/><br />
                <label>Email Id</label>
                <input type="text" name="email" onChange={this.updateHandler} className="form-control"/><br/><br />
                <label>User Name</label>
                <input type="text" name="userName" onChange={this.updateHandler} className="form-control"/><br/><br />
                <label>Mobile No</label>
                <input type="text" name="mobile" onChange={this.updateHandler} className="form-control"/><br/><br />
                
                <label>Password</label>
                <input type="text" name="password" onChange={this.updateHandler} className="form-control" /><br/><br />
                <input type="submit" value="REGISTER" className="btn btn-primary"/><br/><br />
            </form>
            </div>
            </div>
            </div>
    )
}
}
export default Registartion