import React, { Component } from 'react';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfRecipes: null
    };
  }

  render() {

    return (
      <div>
        <h1>Recetas de ... {this.props.search}</h1>
      </div>
    )
  }
}
