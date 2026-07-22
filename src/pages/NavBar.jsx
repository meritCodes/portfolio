import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import './navbar.css'


const NavBar = () => {
  return (
    <nav 
        id='nav-bar'
        >
        <NavLink to="/"  style={{textDecoration:"none", }}>About Me</NavLink>
        <NavLink to="/resume"  style={{textDecoration:"none", }}>Resume</NavLink>
        <NavLink to="/portfolio"  style={{textDecoration:"none", }}>Portfolio</NavLink>
        <NavLink to="/Blog"  style={{textDecoration:"none", }}>Blog</NavLink>
        <NavLink to="/contact"  style={{textDecoration:"none", }}>Contact</NavLink>
    </nav>
  )
}

export default NavBar
