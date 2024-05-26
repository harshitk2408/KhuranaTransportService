import "./Navbar.css";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../Assets/kts.png";
function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><AnchorLink href="#mainpage">Home</AnchorLink></li>
                <li><AnchorLink href="#about-cont">About</AnchorLink></li>
                <li><AnchorLink href="#services-cont">Services</AnchorLink></li>
                <li><AnchorLink href="#quotecont">Contact</AnchorLink></li>
            </ul>
            <div className="logo">
                <img src={logo}/>
            </div>
        </div>
    </nav>
  );
}
export default Navbar;
