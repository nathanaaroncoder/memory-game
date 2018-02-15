import React from "react";
import "./Nav.css";

const Nav = props =>
  <nav className="navbar navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <h1 className ="title">
          Memory Game
        </h1>

        <div className="scores">
            <h4>Score: <span>{props.score}</span></h4>
            <h4>High Score: <span>{props.highScore}</span></h4>
         </div> 
            <h4 className="guessed text-center">{props.guessed}</h4>
     
      
      </div>
    </div>
  </nav>;

export default Nav;
