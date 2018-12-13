import React, { Component } from 'react'
import './Userbar.css'
import {Link} from "react-router-dom";

export default class Userbar extends Component {
  render() {
    const navBarUserControl = this.props.user?
    <React.Fragment>
      <li><p>{this.props.user.username}</p></li>
      <li><Link to="/editUser">Editar perfil</Link></li>
      <li><button onClick={this.props.logout}>Logout</button></li>
      <li><img src={this.props.user.pictureUrl} alt="userImg" /></li>
    </React.Fragment>
    :
    <React.Fragment>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </React.Fragment>
    return (
      <div id="userbar">
          <ul>
            {navBarUserControl}
          </ul>
      </div>
    )
  }
}