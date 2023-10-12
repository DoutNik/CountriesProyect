import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/logo/logo.jpg"

export default function Nav() {
 
  return (
    <div className="navbar-container">
      {/*   <div className="logo-container">
        <img
          src={logo}
          className="logo"
          alt="logo"
          ></img>
          </div> */}
      <div className="navbar">
        <ul>
          <li>
            <NavLink className="text" to="/home">
              Home
            </NavLink>

            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </li>

          <li>
            <NavLink className="text" to="/about">
              About
            </NavLink>

            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </li>

          <li>
            <NavLink className="text" to="/create">
            Create
            </NavLink>

            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </li>

          <li>
          <NavLink className="text" to="/">
              <span className="logout">Logout</span>
              </NavLink>
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
