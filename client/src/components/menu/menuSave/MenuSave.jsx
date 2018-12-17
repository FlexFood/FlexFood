import React, { Component } from 'react'
import './MenuSave.css'

import AuthService from "../../../services/AuthService";

export default class MenuSave extends Component {
  constructor() {
    super();
    this.state = {

    }
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

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("Pulsando el Guardar receta ")
    const { recipesDinner, recipesLunch } = this.state;

    //CREAR MEAL AND SAVE
    let menu = {
      owner: this.props.userId, //GuardarObjectID mirar en pizarra
      menuName: this.props.name,
      numberOfDays: this.props.days,
      recipesDinner,
      recipesLunch
    }

    this.authService.saveMenu(menu)
      .then(menu => {
        console.log(menu, 'GURADADO EN YOUR PROFILE')
        // this.props.getUser(user)
        // this.setState({ ...this.state, user: user.data }, () => console.log("estado", this.state, "user", user));
      });

    //7REDIRECT TO PROFILEEEE
  }

  render() {
    console.log(this.state)
    return (
      <form id="table-menu" onSubmit={this.handleFormSubmit}>

        {this.state.recipesLunch.map((day, i) => {
          return (
            <div>
              <h4>Day {i + 1}:</h4>
              <h4>ToLunch:</h4>
              <p>{day.recipe.label}</p>
              <p>{(day.recipe.calories).toFixed(0)}</p>
              <p>{day.recipe.totalTime}</p>
            </div>
          )
        })}
        {this.state.recipesDinner.map(day => {
          return (
            <div>
              <h4>To Dinner:</h4>
              <p>{day.recipe.label}</p>
              <p>{(day.recipe.calories).toFixed(0)}</p>
              <p>{day.recipe.totalTime}</p>
            </div>
          )
        })}

        <input type="submit" value="Save your menu" />
      </form>
    )
  }
}
