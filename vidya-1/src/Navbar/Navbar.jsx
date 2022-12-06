import React from "react"
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

    render(){
        return <nav>
            <Link to="/">Navbar</Link>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to='/message'>Message</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/product'>Product</Link></li>
            </ul>

        </nav>
    }
}
export default Navbar