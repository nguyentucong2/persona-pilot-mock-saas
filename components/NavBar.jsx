import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/logo.svg";

export default function NavBar() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline"
    }
    return (
        <header className='nav-bar'>    
            <Link className="site-logo" to="/">
                <img src={logo} alt="PersonaPilot logo" className="logo-img" />
            </Link>
            <nav>
                <NavLink to="/" end style={({ isActive }) => isActive ? activeStyles : null}>Home</NavLink>
                <NavLink to="/features" style={({ isActive }) => isActive ? activeStyles : null}>Features</NavLink>
                <NavLink to="/pricing" style={({ isActive }) => isActive ? activeStyles : null}>Pricing</NavLink>
                <NavLink to="/about" style={({ isActive }) => isActive ? activeStyles : null}>About</NavLink>
                <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyles : null}>Contact</NavLink>
                
                <Link to="login" className="login-btn">
                    Login
                </Link>
                <Link to="signup" className="signup-btn">
                    Sign up
                </Link>
            </nav>
        </header>
    );
}