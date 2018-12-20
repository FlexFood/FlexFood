import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    const navBarUserControl = this.props.user ? (
      <li>
        <Link to="/menu">Menu Generator</Link>
      </li>
    ) : (
      <li>
        <Link to="/login">Menu Generator</Link>
      </li>
    );
    return (
        <div id="navbar">
          <div id="label-composition">
            <Link to="/">
              <h1>RecipesForUse</h1>
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/advancedSearch">
                Recipes Finder <span>PRO</span>
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/converter">Converter</Link>
            </li>
            <li>|</li>
            {navBarUserControl}
          </ul>
        </div>
    );
  }
}
