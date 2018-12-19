import React, { Component } from "react";
import HealthLabels from "../healthLabels";
import ShowMenu from "../showMenu";
import AuthService from "../../services/AuthService";
import "./EditUser.css";
export default class EditUser extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      healthLabels: [],
      menus: [],
      menu: null,
      showMenu: false
    };

    this.authService = new AuthService();

  }

  componentWillMount() {
    this.setInit()
    this.setUserMenus()
  }

  setInit = () => {
    this.setState({
      ...this.state,
      user: this.props.user,
      healthLabels: this.props.user.healthLabels
    });
    console.log(this.state, "EL STATE EN SETINIT")
  }


  setUserMenus = () => {

    this.authService
      .getUserMenus()
      .then(menus => this.setState({ ...this.state, menus }));

  };

  handleMenuSelect = i => {
    this.setState({
      ...this.state,
      menu: this.state.menus[i],
      showMenu: true,
    });
  };

  //GET PARA SACAR LOS MEALS DEL USER
  //LOGIN- ME ASEGURO DE Q ME CTUALICE 
  //DESPUES DE HSBER GUARDARDO UNA


  handleFormHealthLabelsSubmit = e => {
    e.preventDefault();
    const { healthLabels, dietLabels } = this.state;
    this.authService.edit({ healthLabels, dietLabels }).then(user => {
      this.props.getUser(user);
      this.setState({ ...this.state, user: user.data }, () =>
        console.log("estado", this.state, "user", user)
      );
    });
  };

  //CHECKED HEALTHLABELS
  handleChange = e => {
    const { name, value } = e.target;
    let array = [...this.state[name]];

    console.log(array);
    if (e.target.checked) {
      array.push(value);
      this.setState({ ...this.state, [name]: array });
    } else {
      array.splice(array.indexOf(value), 1);
      this.setState({ ...this.state, [name]: array });
    }
  };


  render() {
    
    var menu = this.state.showMenu && this.state.menu.length != 0 ? (
      <ShowMenu menu={this.state.menu} />
    ) : (
        ""
      );
    return (
      <div id="profile">
        {menu}
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
            {this.state.menus.map((menuBox, index) => {
                return (
                  <div
                    className="link-box"
                    onClick={() => this.handleMenuSelect(index)}
                    key={index}>
                    <p>{index}-{menuBox.menuName}</p>
                  </div>
                )})}

            {/* {this.state.menus.length !== 0 ?
              (this.state.menus.map((menuBox, index) => {
                return (
                  <div
                    className="link-box"
                    onClick={(index) => this.handleMenuSelect(index)}
                    key={index}>
                    <p>{index}-{menuBox.menuName}</p>
                  </div>
                )
              }))
              : ''} */}

          </div>
        </div>
        <form id="user-form" onSubmit={this.handleFormHealthLabelsSubmit}>
          <HealthLabels
            handleChange={this.handleChange}
            user={this.state.user}
            healthLabels={this.healthLabels}
          />
          <input id="profile-btn" type="submit" value="Send" />
        </form>
      </div>
    )// : (
    //     <p>Loading...</p>
    //   );
  }
}
