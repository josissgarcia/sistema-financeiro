import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/">Home</Link> <br/>
        <Link to="/lancamentos">Lancamentos</Link> <br/>
        <Link to="/sobre">Sobre</Link> <br/>
    </nav>
  )
}

export default Navbar