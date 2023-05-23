import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link> <br/>
        <Link to="/a-faculdade">A Faculdade</Link> <br/>
        <Link to="/dpo-lgpd">DPO Lgpd</Link> <br/>
        <Link to="/noticias">Noticias</Link> 
    </nav>
  )
}

export default Navbar