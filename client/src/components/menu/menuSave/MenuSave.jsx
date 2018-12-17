import React, { Component } from 'react'
import './MenuSave.css'

export default class MenuSave extends Component {
  constructor() {
    super();
    this.state = {

    }
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

  render() {
    console.log(this.state)
    return (
      <div id="table-menu">

        {this.state.recipesLunch.map((day, i) => {
          return (
            <div>
              <h4>Day {i+1}:</h4>
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

      </div>
    )
  }
}
