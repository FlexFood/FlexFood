import React, { Component } from 'react'
import HealthLabels from '../healthLabels';
<<<<<<< HEAD

=======
>>>>>>> 55915d1c15a859467362d9c48f1ca1397fdea939

export default class Meal extends Component {
  render() {
    return (
<<<<<<< HEAD
      <form id="meal" onSubmit={this.props.handleFormAdvancedSubmit}>

        <input id="name-meal"
            type="text"
            placeholder="Nombre del menú..."
            onChange={e => this.props.handleChange(e)}
          />
          <HealthLabels/>
          <input type="submit" value="Buscar" />
      </form>
=======
      <div>
        <h1>GENERADOR DE MENUS</h1>
        <form>
          <input type="text" name="mealname" id=""/>
          <input type="number" name="numberOfDays" max="7" />
          <HealthLabels />
        </form>
      </div>
>>>>>>> 55915d1c15a859467362d9c48f1ca1397fdea939
    )
  }
}
