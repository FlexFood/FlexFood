import React, { Component } from "react";
import HealthLabels from "../healthLabels";
import DietLabels from "../dietLabels";
import AuthService from "../../services/AuthService";

export default class EditUser extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      healthLabels: [],
      dietLabels: []
    };
    this.authService = new AuthService();
  }
  

  handleFormSubmit = e => {
    e.preventDefault();
    const { healthLabels, dietLabels } = this.state;
    this.authService.edit({ healthLabels, dietLabels })
    .then(user => {
      console.log(user)
      this.setState({ ...this.state, user: user.data });
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    let array = [...this.state[name]];

    if (e.target.checked) {
      array.push(value);
      this.setState({ ...this.state, [name]: array });
    } else {
      array.splice(array.indexOf(value), 1);
      this.setState({ ...this.state, [name]: array });
    }
  };

  render() {


    if(!this.state.user && this.props && this.props.user) {
      this.setState({ ...this.state, user: this.props.user });
    }

    return this.state.user ? 

     (
      <div>
        <div>
          <h3>Perfil de {this.state.user.username}</h3>
          <img src={this.state.user.pictureUrl} alt="userImg"/>

        </div>
        <form onSubmit={this.handleFormSubmit}>
          <HealthLabels handleChange={this.handleChange} user={this.state.user} />
          <DietLabels handleChange={this.handleChange} user={this.state.user} />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    ) :  (<p>Loading...</p>)
  }
}
