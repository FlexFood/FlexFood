import React, { Component } from 'react'
import HealthLabels from '../healthLabels';

export default class Meal extends Component {
  render() {
    return (
      <div>
        <h1>GENERADOR DE MENUS</h1>
        <form>
          <input type="text" name="mealname" id=""/>
          <input type="number" name="numberOfDays" max="7" />
          <HealthLabels />
        </form>
      </div>
    )
  }
}
