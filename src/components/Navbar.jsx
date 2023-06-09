import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link className='link' to="/">Home</Link> 
        <Link className='link' to="/lancamentos">Lançamentos</Link> 
        <Link className='link' to="/relatorio">Relatório</Link> 
        <Link className='link' to="/sobre">Sobre</Link> 
    </nav>
  )
}

export default Navbar