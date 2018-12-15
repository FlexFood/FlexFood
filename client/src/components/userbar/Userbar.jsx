import React, { Component } from 'react'
import './Userbar.css'
import {Link} from "react-router-dom";

export default class Userbar extends Component {
  render() {
    const navBarUserControl = this.props.user?
    <React.Fragment>
      <li><p>Hi, {this.props.user.username}</p></li>
      <li>|</li>
      <li><Link to="/editUser">Edit profile</Link></li>
      <li><img id="imgProfile" src={this.props.user.pictureUrl} alt="userImg" /></li>
      <li><Link to="/"><button onClick={this.props.logout}>Logout</button></Link></li>
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