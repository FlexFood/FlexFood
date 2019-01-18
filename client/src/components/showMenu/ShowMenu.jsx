import React, { Component } from "react";
import "./ShowMenu.css";

export default class ShowMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  recipesInit = () => {
    this.setState({ ...this.state, menu: this.props.menu });
  };

  scrollToMenu = () => {
    window.scrollBy({
      top: document.querySelector("body").clientHeight,
      left: 0,
      behavior: "smooth"
    });
  };

  componentWillMount() {
    this.recipesInit();
  }

  componentWillReceiveProps() {
    this.recipesInit();
  }

  componentDidMount() {
    this.scrollToMenu();
  }

  render() {
    if (this.state.menu && this.state.menu.length !== 0) {
      return (
        <form id="save-menu" onSubmit={this.handleFormSubmit}>
          <table id="table-menu">
            <thead>
              <tr>
                {this.state.menu.recipesLunch.map((day, i) => {
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
                {this.state.menu.recipesLunch.map((day, i) => {
                  return (
                    <td className="lunch-box">
                      <p>{day.recipe.label}</p>
                      <p>{day.recipe.calories.toFixed(0)}</p>
                      <p>{day.recipe.totalTime}</p>
                    </td>
                  );
                })}
              </tr>
              <tr>
                {this.state.menu.recipesDinner.map(day => {
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
        </form>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}
