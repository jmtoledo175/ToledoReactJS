import React from "react";
import "./Navbar.css"
import Cartwidget from "../Cartwidget/Cartwidget";

import { Link } from "react-router-dom";
function NavBar() {
  return (
   

<nav>
  <div className="wrapper">
    <div className="logo"><a href="/">Ecommerce</a></div>
    <input type="radio" name="slider" id="menu-btn" />
    <input type="radio" name="slider" id="close-btn" />
    <ul className="nav-links">
      <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
      <li><Link to='/category/celular'>Celulares</Link></li>
      <li><Link to='/category/ipad'>Ipad</Link></li>
      <li><Link to='/category/notebook'>Notebook</Link></li>
      <li> <Cartwidget /></li>
    </ul>
   
    <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
  </div>
</nav>
);


}

export default NavBar;
