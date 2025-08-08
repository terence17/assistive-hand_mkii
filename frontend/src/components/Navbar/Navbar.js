import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo-section">
          <img
            src="images/assistive_hand_text_70.png"
            className="logo"
            alt="Logo"
          />
          
        </div>

        
      </div>


      <div className="nav-links">
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/predictions" activeClassName="active">Predictions</NavLink>
          <NavLink to="/Directory" activeClassName="active">Past Matches</NavLink>
          <NavLink to="/Performance" activeClassName="active">Model Perfomance </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
