import React, { Component } from "react";
import "./MenuSave.css";
import { Redirect } from "react-router-dom";
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

  handleFormSubmit = e => {
    e.preventDefault();
    const { recipesDinner, recipesLunch } = this.state;
    let menu = {
      owner: this.props.userId,
      menuName: this.props.name,
      numberOfDays: this.props.days,
      recipesDinner,
      recipesLunch
    }
   menu = JSON.stringify(menu)
    this.authService.saveMenu(menu)
      .then(menu => {
         this.setState({ ...this.state, redirectToEditUser: true });
      });
  };

  scrollToRecipe = () => {
    window.scrollBy({
      top: document.querySelector("body").clientHeight,
      left: 0,
      behavior: "smooth"
    });
  };

  componentDidMount(){
    this.scrollToRecipe()
  }

  render() {
    if(this.state.redirectToEditUser){
      return <Redirect to="/editUser" />
    }

    let saveButtonComponent = "";
    if(this.props.showSaveButton){
      saveButtonComponent = <input id="submit-save-menu" type="submit" value="Save your menu" />
    }
    
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
     {saveButtonComponent}
      </form>
    );
  }
}
