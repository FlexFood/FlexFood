import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const navBarUserControl = this.props.user ? (
      <li>
        <Link to="/meal">Menu Generator</Link>
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
            <Link to="/advancedSearch">Recipes Finder <span>PRO</span></Link>
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
