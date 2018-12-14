import React, { Component } from "react";
import HealthLabels from "../healthLabels";
import DietLabels from "../dietLabels";

export default class EditUser extends Component {
  constructor(props) {
    super();
    this.state = {
      user: props.user,
      healthLabels:[],
      dietLabels:[]
    };
  }

  componentWillMount() {
    this.setState({ ...this.state, user: this.props.user });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.authService.edit(this.state);
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
    return (
      <div>
        <div>
          <h3>Datos</h3>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <HealthLabels handleChange={this.handleChange} />
          <DietLabels handleChange={this.handleChange} />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}
