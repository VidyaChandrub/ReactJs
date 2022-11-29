import React from "react";

class Eventbind extends React.Component{

    state = {
        msg : "Helloo,,"
    }
    updateHandler = (value) =>{
        this.setState({msg : value})
    }
    render(){
        return(
            <>
            <h1>{this.state.msg}</h1>
            <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button> <nbsp></nbsp>
            <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>GA</button> <nbsp></nbsp>
            <button onClick={this.updateHandler.bind(this,"Good Night")}>GN</button>
            </>
            );
    }
}
export default Eventbind