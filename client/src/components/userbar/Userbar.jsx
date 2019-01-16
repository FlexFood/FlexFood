import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";

export default class Userbar extends Component {
  constructor() {
    super();
    this.state = {};
    this.authService = new AuthService();
    this.fetchUser();
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  render() {
    const userbarLinksToggle = this.state.user ? (
      <div>
        <p>
          Hi, {this.state.user.username} | <Link to="/editUser">Edit</Link>
        </p>
        <img src={this.state.user.pictureUrl} alt={this.state.user.username} />
        <img onClick={this.logOut} src="../../images/power.png" alt="logout-button" />
      </div>
    ) : (
      <div>
        <button onClick={this.loginToggle}>Login</button>
        <button onClick={this.signInToggle}>Signin</button>
      </div>
    );
    return <div>{userbarLinksToggle}</div>;
  }
}
