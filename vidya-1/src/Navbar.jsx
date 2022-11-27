import React from "react";

class Navbar extends React.Component{

render(){
    return(
        
        <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
            <a href="#" className="navbar-brand">Navbar_Ex</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="#" className="nav-link">Home</a></li> 
            <li className="nav-item active"><a href="#" className="nav-link">Login</a></li>
            <li className="nav-item dropdown"><a href="#" className="nav-link dropdown-item">contacts</a></li>
            <li className="nav-item"><a href="#" className="nav-link">services</a></li>
        </ul>
        </nav>
        
    )
}

}
export default Navbar