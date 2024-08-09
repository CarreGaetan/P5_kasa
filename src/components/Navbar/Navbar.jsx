// import React from 'react'
import "./Navbar.scss";
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar_logo">
            <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar_links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          A propos
        </NavLink>
        </ul>
    </nav>
  )
}

export default Navbar