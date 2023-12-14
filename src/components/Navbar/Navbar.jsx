import React from "react";
import Cartwidget from "../Cartwidget/Cartwidget";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Ecommerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <section >
                <Link to='/category/celular' className='btn btn-outline-primary'>Celulares</Link>
                <Link to='/category/ipad' className='btn btn-outline-primary'>Ipad</Link>
                <Link to='/category/notebook' className='btn btn-outline-primary'>Notebook</Link>
            </section>
            
              <Cartwidget />


        </div>
      </div>
    </nav>
  );
}

export default NavBar;
