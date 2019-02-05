import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import Login from "../login";
import Signup from "../signup";

export default class Userbar extends Component {
  constructor() {
    super();
    this.state = {
      showSignup: false,
      showLogin: false
    };
    this.authService = new AuthService();
    this.fetchUserbarUser();
  }

  fetchUserbarUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  logOut = () => {
    this.authService.logout()
    .then(user => {
      this.setState({ ...this.state, user: null });
    })
  };

  signupToggle = () => {
    this.setState({ ...this.state, showSignup: !this.state.showSignup });
  };

  loginToggle = () => {
    this.setState({ ...this.state, showLogin: !this.state.showLogin });
  };

  render() {
    const userbarLinksToggle = this.state.user ? (
      <div>
        <p>
          Hi, {this.state.user.username} | <Link to="/editUser">Edit</Link>
        </p>
        <img src={this.state.user.pictureUrl} alt={this.state.user.username} />
        <img
          onClick={this.logOut}
          src="./images/power.png"
          alt="logout-button"
        />
      </div>
    ) : (
      <div>
        <button onClick={this.loginToggle}>Login</button>
        <button onClick={this.signupToggle}>Signup</button>
      </div>
    );
    return (
      <div>
        <Login
          loginToggle={this.loginToggle}
          showLogin={this.state.showLogin}
          fetchAppUser={this.props.fetchAppUser}
          fetchUserbarUser={this.fetchUserbarUser}
        />
        <Signup
          signupToggle={this.signupToggle}
          showSignup={this.state.showSignup}
          fetchAppUser={this.props.fetchAppUser}
          fetchUserbarUser={this.fetchUserbarUser}
        />
        {userbarLinksToggle}
      </div>
    );
  }
}
