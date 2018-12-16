import React, { Component } from "react";

export default class Converter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {username, password, photo} = this.state;

    // this.authService.signup({username, password, photo})
    // .then(user => {
    //   this.props.getUser(user)
    //   this.setState({username: '', password: '', photo: '', redirect: true})
    // });
  }

  // handleChange = (e) => {
  //   const {name, value} = e.target;

  //   if(name === "photo") {
  //     this.setState({...this.state, photo: e.target.files[0]})
  //   } else {
  //     this.setState({...this.state, [name]: value});
  //   }
  // }

  render() {
    return (
      <div id="converter">
        <div id="original-recipe">
          <form>
            <label>Quantity</label>
            <input type="text" name="qty" />
            <label>Ingredient</label>
            <input type="text" name="ingredient" />
          </form>
          <table>
            <thead>
              <tr>
                <td>QTY</td>
                <td>Ingrdient</td>
              </tr>
            </thead>
            <tbody>
              <td>{this.state.qty}</td>
              <td>{this.state.ingredient}</td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
