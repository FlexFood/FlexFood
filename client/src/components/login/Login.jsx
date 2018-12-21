import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import "./Login.css";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      redirect: false
    };

    this.authService = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.close();
    const { username, password } = this.state;

    this.authService.login({ username, password })
    .then(user => {
      console.log(this.props, "ANTES DEL FALLO")
      this.props.setUser(user);
      this.setState({...this.state, redirect: true });
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    
    if (this.state && this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={e => this.handleChange(e)}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
