
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark '>
         <Link className="navbar-brand" to="/">Phone</Link>
            <ul className='navbar-nav  ml-auto'>
                <li className='nav-item'><Link className="nav-link" to="/contacts">Contact</Link></li>
            </ul>
    </nav>
    )
  }
}

export default Navbar