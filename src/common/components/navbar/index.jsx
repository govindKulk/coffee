import "./navbar.css";
import React, { useEffect, useState } from "react";
import profile from "../../assets/icons/profile.svg";
import wishlist from "../../assets/icons/wishlist.svg";
import cart from "../../assets/icons/cart.svg";

import logo from "../../assets/MaX.png";
const NavbarMain = (props) => {
    
   
  return (
    <div className="navbar-main">
        <div className="nav-brand-main">
            <img src={logo} alt="" className="brand-img" />
        </div>
        <ul className="nav-list-main">
            <li className="nav-item-main">
                <a href="/" className="nav-link-main" id="Home">Home</a>
                
            </li>
            <li className="nav-item-main">
            <a href="/deals" className="nav-link-main" id="Deals">Deals</a>
            </li>
            <li className="nav-item-main">
            <a href="/login" className="nav-link-main" id="Login">Login</a>
            </li>
            <li className="nav-item-main">
            <a href="/signup" className="nav-link-main" id="Signup">Sign Up</a>
            </li>
            <li className="nav-item-main">
                <a href="/search" className="nav-link-main" id="Search">Search</a>
            </li>

        </ul>
        <div className="nav-icons">
            <a href="/"><img src={profile} alt="" className="nav-icon-img" /></a>
            <a href="/"><img src={wishlist} alt="" className="nav-icon-img" /></a>
            <a href="/"><img src={cart} alt="" className="nav-icon-img" /></a>
        </div>
    </div>
  );
};
export default NavbarMain;
