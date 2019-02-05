import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AuthService from "../../services/AuthService";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
    this.authService = new AuthService();
  }

  getUser = () => {
    let user = this.props.user;
    this.setState({ ...this.state, user });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.state.user) {
      this.setState({ ...this.state, user: nextProps.user });
    }
  }

  render() {
    const navBarUserControl = this.state.user ? (
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
            <h1 id="logo">RecipesForUse</h1>
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
