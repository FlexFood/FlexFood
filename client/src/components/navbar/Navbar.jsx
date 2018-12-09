import React, { Component } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const navBarUserControl = this.props.user?
    <React.Fragment>
      <li><p>Hola {this.props.user.username}</p></li>
      <li><button onClick={this.props.logout}>Logout</button></li>
    </React.Fragment>
    :
    <React.Fragment>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </React.Fragment>
    return (
      <div>
          <h1><Link to='/'><img src="" alt="Logo"/>FlexFood</Link></h1>
          <ul>
            <li><Link to="/advancedSearch">Buscador de Recetas</Link></li>
            <li><Link to="/converter">Conversor</Link></li>
            <li><Link to="/login">Generador de menús</Link></li>
            {navBarUserControl}
          </ul>
      </div>
    )
  }
}
