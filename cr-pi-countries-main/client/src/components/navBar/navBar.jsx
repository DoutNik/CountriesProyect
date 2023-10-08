import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/logo/logo.jpg"

export default function Nav() {
 
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo-container">
        <img
          src={logo}
          className="logo"
          alt="logo"
          ></img>
          </div>
        <ul>
          <li>
            <NavLink className="text" to="/About">
              About
            </NavLink>

            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </li>

          <li>
            <NavLink className="text" to="/home">
              Home
            </NavLink>

            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </li>

          <li>
            <NavLink className="text" to="/create">
            create
            </NavLink>

            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </li>

          <li>
          <NavLink className="text" to="/">
              <span className="logout">Logout</span>
              </NavLink>
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
