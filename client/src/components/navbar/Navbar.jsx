import React, { Component } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
          <h1><Link to='/'><img src="" alt="Logo"/>FlexFood</Link></h1>
          <ul>
            <li><Link to="/advancedSearch">Buscador de Recetas</Link></li>
            <li><Link to="/converter">Conversor</Link></li>
            <li><Link to="/login">Generador de menús</Link></li>
          </ul>
      </div>
    )
  }
}
