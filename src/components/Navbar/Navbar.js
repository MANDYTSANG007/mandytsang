import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="navbar">
            <img
                src={require(`../../assets/${navbar ? "x-white" : "menu-white"}.png`)}
                alt=""
                className="menu-icon"
                onClick={() => {
                    setNavbar(!navbar);
                }}
            />
            <ul className="directories">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/portfolio"> Portfolio </Link></li>
                <li><Link to="/contact"> Contact </Link></li>
            </ul>
            <div className="mobile-navbar" style={{ left: navbar ? "0%" : "-70% " }}>
                <p style={{ padding: "0vh 3vh"}}>Menu</p>
                <ul className="mobile-directories">
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/portfolio"> Portfolio </Link></li>
                    <li><Link to="/contact"> Contact </Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;