import React from "react";

class StateEx extends React.Component{
state ={
    message : "Hellooooo"
       } 
gmHandler=()=>{
this.setState({message : "Good Morning"})
}

gnHandler=()=>{
    this.setState({message : "Good Night"})
    }

render(){
    return(
        <>
        <h1>Message Value :{this.state.message}</h1>

        <button onClick={this.gmHandler}>GM</button> <nbps></nbps>
        <button onClick={this.gnHandler}>GN</button>
        </>
    )
}

}
export default StateEx