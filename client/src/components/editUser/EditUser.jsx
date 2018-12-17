import React, { Component } from "react";
import HealthLabels from "../healthLabels";
import AuthService from "../../services/AuthService";
import "./EditUser.css";
export default class EditUser extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      healthLabels: [],
    };
    this.authService = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const { healthLabels, dietLabels } = this.state;
    this.authService.edit({ healthLabels, dietLabels }).then(user => {
      this.props.getUser(user);
      this.setState({ ...this.state, user: user.data }, () =>
        console.log("estado", this.state, "user", user)
      );
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    let array = [...this.state[name]];

    console.log(array);
    if (e.target.checked) {
      array.push(value);
      this.setState({ ...this.state, [name]: array });
    } else {
      array.splice(array.indexOf(value), 1);
      this.setState({ ...this.state, [name]: array });
    }
  };

  render() {
    if (!this.state.user && this.props && this.props.user) {
      console.log(this.props.user, "Setteando por primera vez desde App");
      this.setState({
        ...this.state,
        user: this.props.user,
        healthLabels: this.props.user.healthLabels
      });
    }

    return this.state.user ? (
      <div id="profile">
        <div id="user-container">
          <div className="aux-container">
            <h2>{this.state.user.username}'s profile</h2>
            <hr id="line-user" />
            <img src={this.state.user.pictureUrl} alt="userImg" />
          </div>
        </div>
        <div id="menu-user-container">
          <div className="aux-container">
            <h2>{this.state.user.username}'s menus</h2>
            <hr id="line-user" />
          </div>
        </div>
        <form id="user-form" onSubmit={this.handleFormSubmit}>
          <HealthLabels
            handleChange={this.handleChange}
            user={this.state.user}
            healthLabels={this.healthLabels}
          />
          <input id="profile-btn" type="submit" value="Send" />
        </form>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}
