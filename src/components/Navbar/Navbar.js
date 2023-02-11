import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="directories">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/portfolio"> Portfolio </Link></li>
                <li><Link to="/contact"> Contact </Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;