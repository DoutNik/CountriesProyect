import React from "react";

import htmlImg from "../../assets/logo/HTML5_Logo_64.png";
import cssImg from "../../assets/logo/css3_logo.svg";
import javascriptImg from "../../assets/logo/JS_logo.svg";
import reactImg from "../../assets/logo/react_logo.png";
import reduxImg from "../../assets/logo/redux_logo.png";
import nodeImg from "../../assets/logo/919825.png";
import sequelizeImg from "../../assets/logo/sequelize-logo.png";
import postgreImg from "../../assets/logo/postgresql-logo.png";

import NavBar from "../../components/navBar/navBar";

import "./about.css";

export default function AboutPage() {
  return (
<>
<NavBar />
    <div className="about-container">
      <div className="infoCointainer">
        <h1>About this app</h1>
        <p>
          Welcome to our global country database. <br /> Explore detailed
          information about countries worldwide. From population statistics to
          interesting facts and geography, dive into the data you need to learn
          more about our world.
        </p>
        <h3>features:</h3>
        <ul className="text-list">
          <li>Search for countries and their info</li>
          <li>Filter countries by name, activities, continents</li>
          <li>Sort countries in different ways </li>
          <li>Create activities and see them in the country info</li>
        </ul>
        <h3>Technologies used:</h3>
        <ul>
          <h4>HTML - CSS - Javascript</h4>
          <li className="three-images">
            <img src={htmlImg} alt="html icon" />
            <img src={cssImg} alt="css icon" />
            <img src={javascriptImg} alt="javascript icon" />
          </li>
          <h4>React - Redux</h4>
          <li className="two-images">
            <img src={reactImg} alt="react icon" />
            <img src={reduxImg} alt="redux icon" />
          </li>
          <h4>Node - Express</h4>
          <li className="two-images">
            <img src={nodeImg} alt="node icon" />
          </li>
          <h4>Sequelize - PostgreSQL</h4>
          <li className="two-images">
            <img src={sequelizeImg} alt="sequelize icon" />
            <img src={postgreImg} alt="postgreSQL icon" />
          </li>
        </ul>
      </div>
    </div>
</>
  );
}
