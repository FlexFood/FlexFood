import React, { Component } from "react";
import "./MenuSave.css";

import AuthService from "../../../services/AuthService";

export default class MenuSave extends Component {
  constructor() {
    super();
    this.state = {};
    this.authService = new AuthService();
  }

  recipesInit = () => {
    this.setState({
      ...this.state,
      recipesLunch: this.props.recipesLunch,
      recipesDinner: this.props.recipesDinner
    });
  };

  componentWillMount() {
    this.recipesInit();
  }

  //POST BACK PARA GUARDAR EN MONGO EL MENU
  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.props.userId,"Pulsando el Guardar receta ");
    const { recipesDinner, recipesLunch } = this.state;

    let menu = {
      owner: this.props.userId, //GuardarObjectID mirar en pizarra
      menuName: this.props.name,
      numberOfDays: this.props.days,
      recipesDinner,
      recipesLunch
    }
   menu = JSON.stringify(menu)
    this.authService.saveMenu(menu)
      .then(menu => {
        console.log(menu, 'GURADADO EN YOUR PROFILE')
        // this.props.getUser(user)
        // this.setState({ ...this.state, user: user.data }, () => console.log("estado", this.state, "user", user));
      });

    //7REDIRECT TO PROFILEEEE
  };

  render() {
    console.log(this.state);
    return (
      <form id="save-menu" onSubmit={this.handleFormSubmit}>
        <table id="table-menu">
          <thead>
            <tr>
              {this.state.recipesLunch.map((day, i) => {
                return (
                  <td className="title-box">
                    <h4>Day {i + 1}</h4>
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.recipesLunch.map((day, i) => {
                return (
                  <td className="lunch-box" >
                    <p>{day.recipe.label}</p>
                    <p>{day.recipe.calories.toFixed(0)}</p>
                    <p>{day.recipe.totalTime}</p>
                  </td>
                );
              })}
            </tr>
            <tr>
              {this.state.recipesDinner.map(day => {
                return (
                  <td className="dinner-box">
                    <p>{day.recipe.label}</p>
                    <p>{day.recipe.calories.toFixed(0)}</p>
                    <p>{day.recipe.totalTime}</p>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
        <input id="submit-save-menu" type="submit" value="Save your menu" />
      </form>
    );
  }
}
