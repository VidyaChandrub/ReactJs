import React from "react";
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

    render(){
        return <nav>
            <Link to="/">Navbar</Link>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

        </nav>
    }
}
export default Navbar