import React from "react"
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link className="navbar-brand " to="/">Navbar</Link>
            <ul className="navbar-nav ml-auto ">
                <li className="nav-item active"><Link to="/home" className="nav-link">Home</Link></li>
                <li className="nav-item "><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to='/message' className="nav-link">Message</Link></li>
                <li className="nav-item"><Link to='/counter' className="nav-link">Counter</Link></li>
                <li className="nav-item"><Link to='/product' className="nav-link">Product</Link></li>
                <li className="nav-item"><Link to='/digital' className="nav-link">Digital</Link></li>
            </ul>

        </nav>
    }
}
export default Navbar