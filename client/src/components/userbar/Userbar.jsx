import React, { Component } from 'react'
import {Link} from "react-router-dom";

import './Userbar.css'

import Modal from "../modal";

export default class Userbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  showModal = (e) => {
    this.setState({ show: true, children: e });
  }
  //OCULTAR MODAL
  hideModal = () => {
    this.setState({ show: false });
  }
  

  render() {

    const navBarUserControl = this.props.user?
    <React.Fragment>
      <li><p>Hi, {this.props.user.username}</p></li>
      <li>|</li>
      <li><Link to="/editUser">Edit profile</Link></li>
      <li><img id="imgProfile" src={this.props.user.pictureUrl} alt="userImg" /></li>
      <li><Link to="/" onClick={this.props.logout}><img id="off-img" src="./images/power.png" alt=""/> </Link></li>
    </React.Fragment>
    :
    <React.Fragment>
      <li><Link to="" onClick={()=>this.showModal("Login")} >Login</Link></li>
      <li><Link to="" onClick={()=>this.showModal("SignUp")} >Signup</Link></li>
    </React.Fragment>
    
    return (
      <div id="userbar">
          <ul>
            {navBarUserControl}
            <Modal
              handleClose={this.hideModal}
              show={this.state.show}
              children= {this.state.children}
              close={this.hideModal}
              setUser={this.props.setUser} />
          </ul>
          
      </div>
    )
  }
}