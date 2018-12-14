import React, { Component } from 'react'
import HealthLabels from '../healthLabels';

export default class Meal extends Component {
  render() {
    return (
      <form id="meal" onSubmit={this.props.handleFormAdvancedSubmit}>

        <input id="name-meal"
            type="text"
            placeholder="Nombre del menú..."
            onChange={e => this.props.handleChange(e)}
          />
          {/* <HealthLabels /> */}
          <input type="submit" value="Buscar" />
      </form>
    )
  }
}
