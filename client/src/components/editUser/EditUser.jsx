import React, { Component } from "react";
import HealthLabels from "../healthLabels";
import ShowMenu from "../showMenu";
import AuthService from "../../services/AuthService";
import "./EditUser.css";

export default class EditUser extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };

    this.authService = new AuthService();
    this.fetchUser();
    this.healthLabels = [];
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  handleMenuSelect = i => {
    this.setState({
      ...this.state,
      menu: this.state.menus[i],
      showMenu: true
    });
  };

  getHealthLabels = obj => {
    this.healthLabels = []
    Object.entries(obj).map(label => {
      if (label[1] === true) {
        this.healthLabels.push(label[0]);
      }
    });
  };

  handleHealthLabelsSubmit = (e) => {
    e.preventDefault();
    this.authService.edit({healthLabels: this.healthLabels})
    .then(user => {
      this.setState({ ...this.state, user })
    })
  }

  scrollToMenu = () => {
    window.scrollBy({
      top: document.querySelector("body").clientHeight, // could be negative value
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    var menu =
      this.state.showMenu && this.state.menu.length != 0 ? (
        <ShowMenu menu={this.state.menu} />
      ) : (
        ""
      );

    return this.state.user ? (
      <div id="profile">
        <div id="profile-aux">
          <div id="user-container">
            <div className="aux-container">
              <h2>{this.state.user.username}'s profile</h2>
              <hr id="line-user" />
              <img src={this.state.user.pictureUrl} alt="userImg" />
            </div>
          </div>
          <div id="menu-user-container">
            <div className="aux-container">
              <h2>{this.state.user.username}'s menus</h2>
              <hr id="line-user" />
              <div id="menu-shower">
                {/* {this.state.user.menus.map((menuBox, index) => {
                  return (
                    <div
                      className="link-box"
                      onClick={() => {
                        this.handleMenuSelect(index);
                        this.scrollToMenu();
                      }}
                      key={index}
                    >
                      <p className="menu-lines">
                        {index + 1} | {menuBox.menuName}
                      </p>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
          <form
            id="user-form"
            onSubmit={e =>
              this.handleFormHealthLabelsSubmit(e, this.state.healthLabels)
            }
          >
            <HealthLabels
              getHealthLabels={this.getHealthLabels}
              user={this.state.user}
            />
            <input id="profile-btn" type="submit" value="Send" />
          </form>
        </div>
        {menu}
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}
