import React from "react";

class State extends React.Component{

 message = "Hello,,,,,,Good Morning"
gmHandler = () =>{
   this.message = "Good morning";
   this.forceUpdate();
}

    render(){
        return(
            <>
            <h1>Message Value : {this.message}</h1>
            <button onClick={this.gmHandler}>GM</button>
            </>
        )
    }
}
export default State